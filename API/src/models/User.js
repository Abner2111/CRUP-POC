const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserScheme = new Schema(
    {
        name:{
            type: String
        },
        age: {
            type: Number
        },
        city: {
            type: String
        }
    });

const User = mongoose.model('myUsers',UserScheme);

module.exports = User;