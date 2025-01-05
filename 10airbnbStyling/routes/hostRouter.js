const express=require('express');
const path =require('path');

const rootDir=require('../utils/pathUtils')
const hostRouter=express.Router();

hostRouter.post("/add-Home",(req,res,next)=>{
    console.log(req.body);
    res.send(`<p>Your home is added successfully</p>
        <a href="/">Go to Homepage</>
        `)
 })

 hostRouter.get("/add-Home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-Home.html'));
 })

 module.exports=hostRouter;