const express=require('express');
const { cards }=require('./hostRouter')

const userRouter=express.Router();
//Router will return  a router object which can be used for request handling.

userRouter.get("/",(req,res,next)=>{
        res.render('Home',{cards:cards});
});


 module.exports=userRouter;