const express = require("express");
const app=express();
const cookieParser=require('cookie-parser')
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');


dotenv.config();

//Routers
const auth=require('./router/auth');
const userApi=require('./router/user');
const postApi=require('./router/post');
const catApi=require('./router/category')


//connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true})
.then(console.log('connected to db'))
.catch(err=> console.log(err))


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',auth)
app.use('/api/user',userApi)
app.use('/api/post',postApi)
app.use('/api/category',catApi)

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('running on port 3000')
    }
})