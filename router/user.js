const router=require('express').Router();
const {updateUser, deleteUser}=require('../controller/user');

//UpdateUser
router.put('/:id',updateUser)

//DeleteUser
router.delete('/:id',deleteUser)

module.exports=router