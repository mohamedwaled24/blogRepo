const router=require('express').Router();
const {Register,LogIn}=require('../controller/auth');



//Register
router.post('/register',Register)

//LogIn
router.post('/login',LogIn)



module.exports=router;