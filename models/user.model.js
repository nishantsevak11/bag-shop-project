const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname:{
        type:String
    },
    password:{
        type:String
    },
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    pictures:String
});

module.exports = mongoose.model("user", userSchema);