const asyncHandler = require('express-async-handler')
const generateToken =  require('../utils.js/generatetoken')
const User = require('../models/userModel')


//@desc auth user and get token
//route Post /api/users/login
//access public
const authUser = asyncHandler(async(req,res) =>{
   const {email,password} =  req.body
   const user =  await User.findOne({email})

   if(user && (await user.matchPassword(password))){
     res.json({
         _id : user._id,
         name:user.name,
         email:user.email,
         token:generateToken(user._id)
     })
   }else{
       res.status(401)
       throw new Error('invalid email or password')
   }
})

//@desc get user profile
//@route POST /api/users/profile
//@access private


const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    } else {
      res.status(404)
      throw new Error('user not found')
    }
  })

//@desc register user profile
//@route POST /api/users
//@access public

  const registerUser = asyncHandler(async (req, res) => {
    const { name,email, password} = req.body
    const userExists = await User.findOne({ email })
  
    if(userExists){
      res.status(400);
      throw new Error ('User already exist')
    }
  
    const user =  await User.create({
      name,
      email,
      password
    })
    if(user){
       res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
       })
    }else{
    res.status(400)
    throw new Error('Invalid user data')
    }
   
  })
  

module.exports ={authUser,getUserProfile,registerUser}