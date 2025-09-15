var fs = require('fs');

// fs.writeFile("sample.txt","Node is awesome.but sync function block in asynchronous",(err)=> {
//  if(err)  throw err;
// console.log("Created a file");
// });
// console.log("END");

// fs.rename("sample.txt","demo.txt",(err)=> {
//  if(err)  throw err;
// console.log("Append a file");
// });
// console.log("END");

// fs.readFile("demo.txt","utf-8",(err,data)=> {
//  if(err)  throw err;
//  console.log(data)
// console.log("Read a file");
// });
// console.log("END");


fs.unlink("demo.txt",(err)=> {
 if(err)  throw err;
console.log("Deleted a file");
});
console.log("END");

