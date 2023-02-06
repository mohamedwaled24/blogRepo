const mongoose=require('mongoose');

const UserSchema =new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

module.exports=mongoose.model('User',UserSchema)