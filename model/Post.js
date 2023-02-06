const mongoose=require('mongoose');

const PostSchema =new mongoose.Schema({
    tittle:{
        required:true,
        type:String
    },
    descrip:{
        required:true,
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }],
    photo:{
        type:String
    }
},
{
    timestamps:true
})

module.exports=mongoose.model('Post',PostSchema)