const express=require('express');
const hostRouter=express.Router();
const {PostAddHome , getAddHome}=require('../controllers/homeController')

hostRouter.post("/add-Home",PostAddHome);
hostRouter.get("/add-Home",getAddHome)

exports.hostRouter=hostRouter;