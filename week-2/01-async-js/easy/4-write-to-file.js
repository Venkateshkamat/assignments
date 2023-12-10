const fs = require('fs');

let data = "Wrote thissss ddatttaaaa frommmm 4-write-to-file.js"

fs.writeFile('a.txt',data,(err)=>{
    if(err) return console.log("Error while writing file");
    console.log("Successfully wrote to file");
})

