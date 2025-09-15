var fs = require('fs');

// fs.writeFile("sample.txt","Node is awesome.but sync function block in asynchronous",(err)=> {
//  if(err)  throw err;
// console.log("Created a file");
// });
// console.log("END");

fs.rename("sample.txt","demo.txt",(err)=> {
 if(err)  throw err;
console.log("Append a file");
});
console.log("END");

