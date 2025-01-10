 const express=require('express');
 const path=require('path');

 const userRouter=require ('./routes/userRouter');
 const {hostRouter}=require('./routes/hostRouter');

 const rootDir=require('./utils/pathUtils')
 const app=express();
  
 app.use(express.urlencoded()) 

 app.use(express.static(path.join(rootDir,'public')));
 
 app.use(userRouter);
 app.use("/host",hostRouter); 

app.set('view engine','ejs');
app.set('views','views');
 

 app.use((req,res,next)=>{
    res.status(400).sendFile(path.join(rootDir,'views','404.html'));
 })
 const PORT=4000;
 app.listen(PORT,()=>{
    console.log("Server started at Port No",PORT);
 })