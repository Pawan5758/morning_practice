////create a nodejs server that prints hello world/
/*types
1. inbuilt nodejs modules(https, fs, os, path....)
2. custome nodejs modues (create your own by using js)
3. npm package (library use)
*/
const http = require("http"); // nodejs inbuilt package
const myModules= require("./myCostumeModule")
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); //html tag
    const date =myModules.myDate();
    const myTime =myModules.myTime();
    res.write("<h1>Hello world,pawan</h1>"<p>"
    + date
    + "</p><p>"
    + myTime + "</p>"
    ); //body
    res.end();
  })
  .listen(8888);
console.log("app is running on port 8888");
//loclhost:8888 in browser
