const mongoose = require('mongoose'); 
const contentSchema =  mongoose.Schema({
   language:{
           type:String,
           required:true
       },
       subject:{
           type:String,
           required:true,
          
       },
       Class:{
           type:String,
           required:true
       },
       chapter:{
           type:String,
           required:true,
           
       },
       topic:{
           type:String,
           required:true,
           
       },
       image:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
    }
      
   
   },{ 
       timestamps : true
   })
   
   const Content = mongoose.model('Content',contentSchema);
   
   module.exports =  Content