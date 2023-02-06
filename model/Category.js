const mongoose=require('mongoose');

const CategorySchema =new mongoose.Schema({
 name:{
    required:true,
    type:String
 }
})

module.exports=mongoose.model('Category',CategorySchema)