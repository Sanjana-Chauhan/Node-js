const express=require('express');
const path =require('path'); //used to send html files as response

const userRouter=express.Router();
//Router will return  a router object which can be used for request handling.

userRouter.get("/",(req,res,next)=>{
        res.sendFile(path.join(__dirname,'../','views','Home.html'));
        //send \file is used to send html file as response
 })

 module.exports=userRouter;