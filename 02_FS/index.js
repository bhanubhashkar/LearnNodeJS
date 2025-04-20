const fs = require("fs");

// Create/Edit a file.
fs.writeFile("message.txt", "This is message. Hello from NodeJS!", (err)=>{
    if(err) throw (err);
    console.log("The file has been saved"); 
});

// Read a file.
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 

// Delete a file.

