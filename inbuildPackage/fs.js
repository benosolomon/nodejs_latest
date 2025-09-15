var fs = require('fs');

fs.writeFile("sample.txt","Node is awesome.but sync function block in asynchronous",handleFileCreation);
console.log("END");


function handleFileCreation(err) {
  if(err)  throw err;
console.log("Created a file");
console.log("END");
}