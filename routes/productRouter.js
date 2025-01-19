const express = require('express');
const productRouter = express.Router();

productRouter.get('/', (req,res)=>{
    res.send("in product router");
})

module.exports = productRouter;