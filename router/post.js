const router = require("express").Router()
const {createPost, deletePost, updatePost}=require('../controller/posts')
//createPost
router.post('/:id/:catID',createPost)

//DeletePost
router.delete('/:id',deletePost)

//UpdatePost
router.put('/:id/:userid',updatePost)

module.exports=router