const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
const connectDb = require('./config/mongoose.connection.js');
const ownersRouter = require('./routes/ownersRouter.js');
const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");

// app.get("/", (req,res)=>{
//     res.send("Welcome");
// })

app.use('/owners', ownersRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(3000,(req,res)=>{
    connectDb();
});