// Modules in Node are the reusable blocks of code that encapsulate various functionalities in a Node application.
// These modules can include functions, objects, and variables that are exported from the code files.

//importing the add function through modeule 
const Math = require("./math");
// const http = require("http")  inbuilt files 

console.log(Math.addFn(2,3));
console.log(Math.subFn(2,3));
