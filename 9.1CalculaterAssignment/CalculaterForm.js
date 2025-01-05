const CalculaterForm=(req,res)=>{
    return res.write(` 
        <html>
            <head><title>HomePage</title></head>
            <Body>
                <form action="/handleSum" method="POST">
                        Num1 : <input type="text" name="num1"><br>
                        Num2 : <input type="text" name="num2"><br>
                        <button type="submit">Add</button>
                </form>
                </Body>    
      </html>`);
  }
exports.CalculaterForm=CalculaterForm;