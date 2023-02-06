const Post = require('../model/Post');
const User = require("../model/User")
//CreatePost
const createPost = async(req,res,next)=>{
    const userid=req.params.id
    const catID=req.params.catid
    try {
        
        const newPost =await new Post({
            user:userid,
            catgeory:catID,
            ...req.body
        })
        const savedPost = await newPost.save()
        const author = await (await Post.find({}).populate({path:'user' , select:'username email'}).populate({path:'category', select:'name'}))
        res.status(200).json(author)
    } catch (error) {
        res.status(500).json('error occured !')
    }
}

//DeletePost
const deletePost=async(req,res,next)=>{
    const postID=req.params.id
    try {
        const deletePost= await Post.deleteOne({_id:postID})
        res.status(200).json(deletePost)
    } catch (error) {
        next(error)
    }
}

//UpdatePost 
const updatePost = async(req,res,next)=>{
    const postID = req.params.id
    const userID=req.params.userid
    try {
        const checkSame = await Post.findById(postID).populate({path:'user', select:'_id username'})
        
        if(checkSame.user._id==userID)
        {
          
            try {
                const updateIt = await Post.findByIdAndUpdate({_id:postID},{$set:req.body},{new:true})
                res.status(200).json(updateIt)
            } catch (error) {
                next(error)
            }
        }else{
            res.status(500).json('you dont have acces to delete this post')
        }
        
    } catch (error) {
        res.status(500).json('cant delete this post')
    }
}


module.exports={
    createPost:createPost,
    deletePost:deletePost,
    updatePost:updatePost
}