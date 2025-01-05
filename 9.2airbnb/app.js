 const express=require('express');
 const path=require('path');

 const userRouter=require ('./routes/userRouter');
 const hostRouter=require('./routes/hostRouter');

 const rootDir=require('./utils/pathUtils')
 const app=express();

 // deprecated method : app.use(bodyParser.urlencoded());  
 app.use(express.urlencoded()) //new method for body parsing
 
 app.use(userRouter);
 app.use("/host",hostRouter); // common path can be specified in router middleware
 
 //after all the routers check the path is the response is still not found then we can send 404 status code
 app.use((req,res,next)=>{
    res.status(400).sendFile(path.join(rootDir,'views','404.html'));
    //setting 404 is important otherwise res is a 200 which can be problematic in scenarios like api call etc.

 })
 const PORT=4000;
 app.listen(PORT,()=>{
    console.log("Server started !");
 })