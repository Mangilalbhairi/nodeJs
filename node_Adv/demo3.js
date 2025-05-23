const { isUtf8 } = require("buffer")
const fs = require("fs")
console.log("start reding file")

fs.readFile("text.txt" , 'utf-8',  (err, data) => console.log("file reading sucessfully done"))

console.log("please wait....")

