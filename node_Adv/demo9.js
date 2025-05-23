const fs = require('fs');
console.log("start file reading")
fs.readFile('./readme.md', 'utf8', (err, data) => { // I/O queue - Callback queue 
    console.log("file reading sucessfully")
    
});

setTimeout(() => console.log("Timer 1"), 5*1000);

console.log("please wait...")