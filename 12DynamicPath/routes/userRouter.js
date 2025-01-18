const express=require('express');
const {getHomepage,getHomeDetails}=require('../controllers/homeController')
const userRouter=express.Router();

userRouter.get("/",getHomepage);
userRouter.get("/homes/:homeid",getHomeDetails);   // :var name represent a variable which can take different values in url


 module.exports=userRouter;