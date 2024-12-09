const fs=require('fs');
const userDataHandler =(req,res) =>{ 

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
       
       const body=[];   
       req.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk);
       })

       req.on('end',()=>{          
        const parsedData=Buffer.concat(body).toString();  
        console.log(parsedData);
        const params=new URLSearchParams(parsedData); 
        
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

}

module.exports=userDataHandler;