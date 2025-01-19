const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
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
    products:{
        type:Array,
        default:[]
    },
    contact:Number,
    pictures:String
});

module.exports = mongoose.model("owner", ownerSchema);