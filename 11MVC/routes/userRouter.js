const express=require('express');
const {getHomepage}=require('../controllers/homeController')
const userRouter=express.Router();

userRouter.get("/",getHomepage);


 module.exports=userRouter;