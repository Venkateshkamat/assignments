const fs = require('fs');

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(`data before changing: ${data}`);
    data = data.replace(/\s+/g,' ').trim();

    console.log(data);
    fs.writeFile("a.txt",data,(err)=>{
        if(err) return console.log("error occured while writing");
        console.log("Wrote to file successfully");
    })


    fs.readFile("a.txt","utf-8",(err,data)=>{
        console.log(`data after changing: ${data}`);
    })
})