const UserSercive = require('../services/user.services');

exports.register = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const successRes = await UserSercive.registerUser(email, password);
        res.json({status:true, successRes:"User Registered Successfully"});
    } catch (error) {
        throw error;
    }
};

exports.login = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        
        const user = await UserSercive.checkUser(email);
        console.log(user);
        if(!user){
            throw new Error('User Does not exit');
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch === false){
            throw new Error('Password Invalid');
        }

        let tokenData = {_id:user._id, email:user.email};

        const token = await UserSercive.generateToken(tokenData, 'secretKey', '1h');

        res.status(200).json({status:true, token:token});

    } catch (error) {
        throw error;
    }
};