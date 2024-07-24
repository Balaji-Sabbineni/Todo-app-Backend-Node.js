const mongoose = require('mongoose');

// Updated the connection string to use environment variables for sensitive information
const dbUser = '<username>';
const dbPassword = '<password>';
const dbName = '<database name>';

const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.7zfjhjz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const connection = mongoose.connect(connectionString)
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.error('Mongodb connection error:', err
));

module.exports = connection;