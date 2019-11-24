require('dotenv').config();

let mongoose = require('mongoose');
let mongoDB = 'mongodb+srv://pawandeepSingh:abcdefgh@cluster0-w3f5o.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true });
let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;