const User = require('../model/User');
const bcrypt = require('bcrypt');



// const Register = async(req,res,next)=>{
//     try {
//         const checker = await User.findOne({email:req.body.email})
//         if(!checker){
           
//         const salt = await bcrypt.genSalt(10)
//         const hash = await bcrypt.hash(req.body.password,salt)
//         const user = new User({
//             ...req.body,
//             password:hash
//         })
//         const savedUser = await user.save()
//         res.status(200).json(savedUser)
//         }else{
//             res.status(500).json('email already exists')
//         }
        
//     } catch (error) {
//         res.status(500).json("cant save this user error occured")
//     }
// }



const Register=async (req,res,next)=>{

try {
    const search= await User.findOne({email:req.body.email})
    if(!search)
    {
              
        const genSalt= await bcrypt.genSalt(10);
  try {
              const hash=await bcrypt.hash(req.body.password,genSalt)
             const user=new User(
                    {
                        ...req.body,
                         password:hash
                     }
                      );
    const {password , ...others} = await user.save();
    res.status(200).json({...others._doc})
} catch (error) {
    res.status(401).json(error)
}

    }
    else{

        res.status(500).json('email already exists')
    }
} catch (error) {
    res.status(500).json('email already exists')
}

}


const LogIn = async (req,res,next)=>{
    try {
        const getUser = await User.findOne({username:req.body.username})
        if(!getUser){
            res.status(404).json('User Not Found')
        }else{
            const compare = await bcrypt.compare(req.body.password,getUser.password)
            if(!compare){
                res.status(404).json('invalid username or password')
            }else{
                 res.status(200).json('Welcom !')
            }
           
        }
    } catch (error) {
        next(error)
    }
}


module.exports={
    Register:Register,
    LogIn:LogIn
}