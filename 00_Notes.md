
# SQL Notes
[Checkout my Profile](https://github.com/bhanubhashkar)

## Introduction
I am learning NodeJS and all the notes and handson exercises are here.

## NPM - Node Package Manager
npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.  

The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.  

npm is the command line client that allows developers to install and publish those packages.  

```js
npm init
npm install packageName

// Use node modules
if "type": "commonjs", in package.json
var = require('sillyname');

if "type": "module", in package.json 
import generateName from "sillyname";

```

## Node Modules


### File System - fs
The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.  
Create or manupulate file in server storage memory.  

Synatax :  
import/require fs native node module.  
const fs = require("fs");  

Create/edit a file.  
fs.writeFile("path/fileName.txt", "All content of the text file.", (err)=>{  
    if(err) throw (err);  
    console.log("Success message.");  
});  

Read A file  
fs.readFile('path/fileName.txt', 'encoding type - utf8', (err, fileData) => {  
    if (err) throw err;  
    console.log(fileData);  
});  

```js
const fs = require("fs");

// Create A file
fs.writeFile("message.txt", "This is message. Hello from NodeJS!", (err)=>{
    if(err) throw (err);
    console.log("The file has been saved"); 
});

// Read A file
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 
```


## Sub Topic
Content


```js
code
```








### Sub Topic
Content


```js
code
```

## Main Topic
Content


```js
code
```
