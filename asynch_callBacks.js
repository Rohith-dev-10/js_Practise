const fs = require("fs");

function print(err, data){
    console.log(data);

fs.readFile("a.txt", "utf-8", print); //Asynchornously
fs.readFile("b.txt", "utf-8", print);

console.log("done!");
}