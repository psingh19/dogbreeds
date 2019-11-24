require('dotenv').config();

let mongoose = require('mongoose');
let mongoDB = process.env.NAME_OF_VARIABLE;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology:true });
let connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;