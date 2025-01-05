const http=require('http');
const {inputHandler}=require('./InputHandler')
const server=http.createServer(inputHandler);

const PORT=3004;
server.listen(PORT,()=>{
    console.log("The server is listening on port 3003");
})