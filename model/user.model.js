const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { Schema }  = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
});

userSchema.pre('save', function(next){
    if(!this.isModified('password')) return next();
    bcrypt.hash(this.password, saltRounds, (err, hash) =>{
        if(err) return next(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
};

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;