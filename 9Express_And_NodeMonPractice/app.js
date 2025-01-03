const http=require('http');
const express=require('express');

const app=express(); //App is  a request handler and can be passed to server
//const server=http.createServer(app);

//Dummy Middleware that logs address

// app.use("/",(req,res,next)=>{
//     console.log("Home path :",req.path);
//    next(); //needed to pass control to next middleware. cannot be used after res send.
// })

// app.use("/",(req,res,next)=>{
//     console.log("Dummy middleware 2");
//     next();
// })

app.get("/",(req,res,next)=>{
    res.send("<p>Welcomw to my practice</p>");
})

app.get("/contact-us",(req,res,next)=>{
    res.send(`
        <form action="/contact-us" method="POST">
        <input type="text" placeholder="Enter Your FirstName"/>
        <input type="text" placeholder="Enter Your lastName"/>
        <button type="submit">Submit</button>
        </form>`)
})

app.post("/contact-us",(req,res,next)=>{
    res.send("<p>We will Contact you shortly!</p>")
})




const PORT=3000;
app.listen(PORT,()=>{
    console.log("Server started !");
})