
# SQL Notes
[Checkout my Profile](https://github.com/bhanubhashkar)

## Introduction


## Node Modules


### File System - fs
The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
Create or manupulate file in server storage memory.

Synatax :
import/require fs native node module.
const fs = require("fs");
Create/edit a file.
fs.writeFile("fileName.txt", "All content of the text file.", (err)=>{
    if(err) throw (err);
    console.log("Success message."); 
});

```js
const fs = require("fs");

fs.writeFile("message.txt", "This is message. Hello from NodeJS!", (err)=>{
    if(err) throw (err);
    console.log("The file has been saved"); 
});
```

### Sub Topic
Content


```js
code
```

### Main Topic
Content


```js
code
```
