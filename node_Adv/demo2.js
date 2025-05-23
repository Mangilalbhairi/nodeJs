// file: tick.js
setTimeout(() => console.log("A - timeout"), 0);

setImmediate(() => console.log("B - immediate"));

process.nextTick(() => console.log("C - nextTick"));

console.log("D - sync");
