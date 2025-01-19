const express = require('express');
const ownersRouter = express.Router();

ownersRouter.get('/', (req,res)=>{
    res.send("in userRouter");
})

module.exports = ownersRouter;