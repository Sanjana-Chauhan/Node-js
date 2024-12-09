// First input from the  browser
const http = require('http'); //require http

const server = http.createServer( (req,res)=>{ //Creating the server and recieving requests ,data and sending response

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
      //res.end(); =>writing this will kill server after the response send. to avoid this use return statement.
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
server.listen(PORT, ()=>{           //Enable the port to listen
    console.log(`Server running on port ${PORT} `)
});
