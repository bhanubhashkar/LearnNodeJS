//var generateName = require('sillyname');

import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';

//import superheroes from "superheroes";

var sillyName = generateName();
console.log("The autoamted generated name is " +sillyName+ ".");

sillyName = generateName();
console.log(`The autoamted generated name is ${sillyName}.`);

var heroName = randomSuperhero(); 
console.log(`I am ${heroName}..!`);

// var name =superheroes;
// console.log(name);
