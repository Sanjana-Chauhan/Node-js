const Home =require('../models/homeCard')
exports.PostAddHome=(req,res,next)=>{
    const home=new Home(req.body.house,req.body.price,req.body.location,req.body.img);
    home.save();

    res.send(`<p>Your home is added successfully</p>
        <a href="/">Go to Homepage</>
        `)
}

exports.getAddHome=(req,res,next)=>{
    res.render('add-Home');
 }

exports.getHomepage=(req,res,next)=>{
    Home.fetchAll((cards)=>{
        res.render('Home',{cards:cards});
    }); 
}
 
exports.getHomeDetails=(req,res,next)=>{ 
    res.send("<h1>You Are in homes detail page");
}