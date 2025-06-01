import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {message : "Enter your URl...", name: "URL",},
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(answers);
    // Use user feedback for... whatever!!

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image-file.png'));

    fs.writeFile("user-input.txt", url, (err)=>{
        if(err) throw (err);
        console.log("The file has been saved"); 
    });
    
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 

