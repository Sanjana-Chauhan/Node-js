// First response to browser
const http = require('http'); //require http

const server = http.createServer( (req,res)=>{ //Creating the server
  //  console.log(req.url,req.headers,req.method);  
 if(req.url==='/'){
    res.setHeader('Content-Type','text/html');  //Creating response for the browser.
    res.write(`<html>
          <head><title>My First Response</title></head>
          <Body> <h1>Namaste Dosto.</Body>    
      </html>`)
      //res.end(); =>writing this will kill server after the response send. to avoid this use return statement.
      return res.end();
 }
 else{
    res.setHeader('Content-Type','text/html');  //Creating response for the browser.
    res.write(`<html>
        <head><title>My First Response</title></head>
        <Body> <h1>hello Friends. Please change Url</Body>    
    </html>`)
    return res.end();
 }
  
  
}); 
const PORT=3003
server.listen(PORT, ()=>{           //Enable the port to listen
    console.log(`Server running on port ${PORT} `)
});
