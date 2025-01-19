const mongoose = require('mongoose');

async function connectDb(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/scratch");
        console.log("Database connected")
    } catch (error) {
        console.log("Error in connectDB: ",error);
    }
}

module.exports = connectDb;