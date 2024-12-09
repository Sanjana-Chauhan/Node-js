// Handling input from the  browser
const http = require('http'); 
const fs=require('fs');
const server = http.createServer( (req,res)=>{ 

res.setHeader('Content-Type','text/html'); 
 if(req.url==='/'){
    res.write(`<html>
          <head><title>My First Response</title></head>
          <Body><h1>Enter Your Data</h1> 
          <form action="/handleDetails" method="POST">
          <input type="text" placeholder="Enter your name" name="username"><br>
          <input type="radio" name=Gender>Male 
           <input type="radio" name=Gender>Female <br>
           <button type="submit" name="submit">Submit</button>
          </form></Body>    
      </html>`);
      
      return res.end();
 }

 //----------------Handler code--------------------

 else if(req.url.toLowerCase()==="/handledetails" && req.method==="POST"){
        fs.writeFile("UserResponse.txt","This file is created as response to user data",(err)=>{
            console.log("Something went wrong",err);
        });
        res.statusCode=302; //status code for redirecting
        res.setHeader('Location','/'); //redirecting to home page
        return res.end();
 }      
 else{
    res.write(`<html>
        <head><title>My First Response</title></head>
        <Body> <h1>Keep smiling buddy</Body>    
    </html>`)
    return res.end();
 }
  
  
}); 
const PORT=3003
server.listen(PORT, ()=>{           //--------------Enable the port to listen
    console.log(`Server running on port ${PORT} `)
});
