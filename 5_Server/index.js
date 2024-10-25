//entry file for server and in package.json "main":"index.js"

const http = require("http");
const fs = require("fs");
const url = require("url")

//creating a web server
const myServer = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return res.end();

  // console.log(req);
  console.log(req.headers);  //headers is usedfor getting extra info of client system and info
  //creatig a log where it store some data 
  const log = `${Date.now()}: ${req.url} New Req Received \n`;
  const myUrl = url.parse(req.url, true); //query parameter string 
  console.log(myUrl);
 
  fs.appendFile('log.txt', log, (err, data) => {
    //we append the log in txt file 
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname
        res.end(`I am ${username}`);  //paersig username from query parameter 
        break;
      default:
        res.end("404 Not found");
        break;
    }
  })
});
//arrow function passed in argument of createserver function is taking incoming request....
//that callback fun have to parameter req and res

//for creaating a server which have to serve in any given port 
myServer.listen(8000, () => {
  console.log("server started");
});
