const router=require('express').Router()
const { createCategory , deleteCat , updateCat}=require('../controller/category')



//createCategory
router.post('/',createCategory)

//deleteCategory
router.delete('/:id',deleteCat)

//updateCategory
router.put('/:id',updateCat)


module.exports=router