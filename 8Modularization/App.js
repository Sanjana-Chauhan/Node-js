//this part will only create and handle server request.
const http = require('http'); 
const reqHandler=require('./User');
const server = http.createServer(reqHandler); 

const PORT=3003
server.listen(PORT, ()=>{         
    console.log(`Server running on port ${PORT} `)
});
