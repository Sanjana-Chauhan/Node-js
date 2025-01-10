// First Node js server
const http = require('http'); //require http

const server = http.createServer( (req,res)=>{ //Creating the server
    console.log(req);
    process.exit();   //Stops the server as it gets its first request.
}); 
const PORT=3003
server.listen(PORT, ()=>{           //Enable the port to listen
    console.log(`Server running on port ${PORT} `)
});
