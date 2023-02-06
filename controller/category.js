const Category=require('../model/Category')
const Post= require('../model/Post')

//CreateCategory
const createCategory = async(req,res,next)=>{
    try {
        const category = new Category({
            ...req.body
        })

        const savedCat = await category.save()
        res.status(200).json(savedCat)
    } catch (error) {
        res.status(500).json('cant create category')
    }
}

//DeleteCategory 
const deleteCat = async(req,res,next)=>{
    const catID=req.params.id
    try {
        const deletedCat=await Category.findById(catID)

        res.status(200).json(deletedCat)
        
    } catch (error) {
        res.status(500).josn('you cant delete this category')
    }
}

//UpdateCategory
const updateCat = async(req,res,next)=>{

const catID = req.params.id
try {
    const updatedCat = await Category.findByIdAndUpdate({_id:catID},{$set:req.body},{new:true})
    res.status(200).json(updatedCat)
} catch (error) {
    res.status(500).json('cant update category')
}

}

module.exports={
    createCategory:createCategory,
    deleteCat:deleteCat,
    updateCat:updateCat

}
