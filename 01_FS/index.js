const fs = require("fs");

fs.writeFile("message.txt", "This is message. Hello from NodeJS!", (err)=>{
    if(err) throw (err);
    console.log("The file has been saved"); 
});