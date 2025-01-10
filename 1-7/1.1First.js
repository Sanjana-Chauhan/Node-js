const fs=require('fs');

fs.writeFile("2Second.txt","Writing in the file ",(err)=>{
    if(err) console.log("Something went wrong!")
      else console.log("file written successfully")
})
console.log("This is first Node program")