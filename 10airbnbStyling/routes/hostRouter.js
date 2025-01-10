const express=require('express');
const path =require('path');

const rootDir=require('../utils/pathUtils')
const hostRouter=express.Router();

const cards=[];
hostRouter.post("/add-Home",(req,res,next)=>{
    console.log(req.body);
    cards.push({
        house: req.body.house,
        price:req.body.price,
        location:req.body.location,
        img:req.body.img,
    });
    res.send(`<p>Your home is added successfully</p>
        <a href="/">Go to Homepage</>
        `)
 })

 hostRouter.get("/add-Home",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-Home.html'));
 })

exports.cards=cards;
exports.hostRouter=hostRouter;