const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors =  require('cors');
const { options } = require('./routes/rt');

//connect to data base
mongoose.connect('mongodb://admin:admin@localhost:27017/usersdb');
const db = mongoose.connection;

db.on('error', (err)=>{
    if(err){
        console.log(err);
    }
});

db.once('open',()=>{
    console.log('Mongo DB Ready to use!!');
});


//Execute express server
const app = express();

//Settings
app.set('port', 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Route 
app.use('/api', require('./routes/rt'));

// Server listening
app.listen(app.get('port'),()=>{
    console.log('Server is ready!!');
});
