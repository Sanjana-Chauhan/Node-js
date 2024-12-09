const HomeHandler=(req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.write(` <html>
                <head><title>HomePage</title></head>
                <Body><h1>Welcome User</h1> 
                    <a href="/Calculater">Go To Calculater
                </Body>    
      </html>`);
      res.end();
}

exports.HomeHandler=HomeHandler;