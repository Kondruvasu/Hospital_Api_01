const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kondruvasu143:tV7CiDHaSJUn5agb@cluster0.6yhppbn.mongodb.net/");

const db = mongoose.connection;

 db.error(
    'error',
    console.error.bind(console,"error in connecting with mongodb")
 );
 db.once('open',()=>{
    console.log('Successfully connected with mongodb');
 });

 module.exports = db;