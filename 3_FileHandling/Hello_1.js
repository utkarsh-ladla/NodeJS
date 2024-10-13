const { Console } = require("console");
const fs = require("fs");

// for creating file and conotent for that file
// sync....
// fs.writeFileSync("./test.txt", 'Hey there')

// we we do again then it overide and content may change
// fs.writeFileSync("./test.txt", 'Hey')


// fs.watchFile("./test.txt", "Hello World Async",(err) => {})


// for reading file
// const result = fs.readFileSync("./Contact.txt", "utf-8")
// console.log(result);


// when we use Sync task then it take value and put it on variable and give it 
// but in Async file also have to pass err and result...

fs.readFile("./Contact.txt","utf-8", (err, result) => {
    if(err) {
        console.log("Error", err);
    }
    else {
       console.log(result);
    }
});

// append file 
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString() )

// copy a file 
fs.cpSync("./test.txt", "./copy.txt");

// delete a file
fs.unlinkSync("./copy.txt");

// statics
console.log(fs.statSync("./test.txt").isFile() );

// make folder /directory
// fs.mkdirSync("my-docss/a", {recursive: true});
