const fs = require('fs');

fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log("File data: "+data);
})

console.log("Log after Fs Readfile command");

// for(let i=0;i<1000000000;i++){
//     let a;
// }