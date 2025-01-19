const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req,res)=>{
    res.send("in userRouter");
})

module.exports = userRouter;