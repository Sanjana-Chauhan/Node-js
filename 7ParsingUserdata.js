// Handling input from the  browser and parsing the user data

const http = require('http'); 
const fs=require('fs');
const server = http.createServer( (req,res)=>{ 

res.setHeader('Content-Type','text/html'); 
 if(req.url==='/'){
    res.write(`<html>
          <head><title>My First Response</title></head>
          <Body><h1>Enter Your Data</h1> 
          <form action="/handledetails" method="POST">
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
       // req.on(data,listener_callback_func)  --> to listen the data sent by the browser continuously.
       const body=[];   // Array to store all the chunks to oprocesss later.
       req.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk);
       })

       req.on('end',()=>{            // this event will listen the end of stream
        const parsedData=Buffer.concat(body).toString();  //concat all the chunks to form main body
        console.log(parsedData);
        const params=new URLSearchParams(parsedData); //this method will extract key value pairs from the parsed data and returns a 2d [[key ,value]..] pair type array.
        // const bodyObj={}; ......->Object that will store the items in key value pair
        // for(const[key,value] of params.entries()){
        //     bodyObj[key]=value;           //--->adding key values to the bodyobject
        // }

        //...............alternate of above commented code.....
        const bodyObj=Object.fromEntries(params);
        console.log(bodyObj);
        fs.writeFile("UserResponse.txt",JSON.stringify(bodyObj),(err)=>{
            console.log("Something went wrong",err);
        });
       })
        
        res.statusCode=302; 
        res.setHeader('Location','/end'); 
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
server.listen(PORT, ()=>{         
    console.log(`Server running on port ${PORT} `)
});
