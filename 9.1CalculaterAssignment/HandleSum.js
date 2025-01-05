const HandleSum=(req,res)=>{
    const body=[];
    req.on('data',(chunks)=>{
        body.push(chunks);
    })
    req.on('end',()=>{
        const concatedBody=Buffer.concat(body).toString();
        const params= new URLSearchParams(concatedBody);
        const numberObj=Object.fromEntries(params);
        const sum=Number(numberObj.num1)+Number(numberObj.num2);
        res.write(` 
            <html>
                <head><title>HomePage</title></head>
                <Body>
                    <h1>The sum of Two numebers is ${sum}</h1> 
                    <a href="/">Go To Home
                    </Body>    
          </html>`);
          return res.end();

    })
  }
exports.HandleSum=HandleSum;