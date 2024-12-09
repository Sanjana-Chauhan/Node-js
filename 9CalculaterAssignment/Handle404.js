const Handle404=(req,res)=>{
    res.write(` 
        <html>
            <head><title>HomePage</title></head>
            <Body>
                <h1>Err : 404 Page Not Found</h1> 
                <a href="/">Go To Home
                </Body>    
      </html>`);
      return res.end();
}
exports.Handle404=Handle404;