const User = require('../model/User');
const bcrypt=require('bcrypt')



const updateUser = async(req,res,next)=>{
    if(req.body.id===req.params.id){
        if(req.body.password){
             try {
                const salt = await bcrypt.genSalt(10)
                const hash = await bcrypt.hash(req.body.password,salt)
                const userUpdated = await User.findByIdAndUpdate(req.params.id,
        {
            $set:{
                 ...req.body,
                 password:hash
            }
        },
        {
            new:true
        })
        res.status(200).json(userUpdated)

    } catch (error) {
        next(error)
    }
        }
      
    }else{
        res.status(401).json('you dont have acces to update this user')
    }
    
}


 const deleteUser =  async(req,res,next)=>{
    const userID = req.params.id;
    try {
        const userDeleted = await User.deleteOne({_id:userID})
        res.status(200).json(userDeleted)
        
    } catch (error) {
        res.status(401).json(error)
        
    }
 }


module.exports={
    updateUser:updateUser,
    deleteUser:deleteUser
}