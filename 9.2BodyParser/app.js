const express=require('express');
const bodyparser=require("body-parser");


const app=express();



app.get("/",(req,res,next)=>{
    res.send("<p>Welcomw to my practice</p>");
})

app.get("/contact-us",(req,res,next)=>{
    res.send(`
        <form action="/contact-us" method="POST">
        <input type="text" name="fname" placeholder="Enter Your FirstName"/>
        <input type="text" name="lname" placeholder="Enter Your lastName"/>
        <button type="submit">Submit</button>
        </form>`)
})

app.use(bodyparser.urlencoded());    
//it will create the body object with all the form data automatically and it in the request as "body"
// any middleware below this can use this body object.
//it will be undefined until params are send through the url.

app.post("/contact-us",(req,res,next)=>{
    console.log(req.body);
    res.send("<p>We will Contact you shortly!</p>")
})




const PORT=3000
app.listen(PORT,()=>{
    console.log("server started!")
})