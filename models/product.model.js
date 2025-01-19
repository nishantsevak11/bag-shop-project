const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    bgColor:String,
    panelColor:String,
    textColor:String
});

module.exports = mongoose.model("product", productSchema);