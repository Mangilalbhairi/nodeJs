console.log("start");

setTimeout(() => console.log("Timer 0"), 0)

setImmediate(() => console.log("setImmediate"))

process.nextTick(() => console.log("process nextTick"))

Promise.resolve().then(() => console.log("promise resolve immediately"))

console.log("end")