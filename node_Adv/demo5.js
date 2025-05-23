

let a = 10;
console.log("start program")

setImmediate(() => console.log("setImmediate called"))

process.nextTick(() => console.log("process nextTick 1"))
process.nextTick(() => console.log("process nextTick 2"))
process.nextTick(() => console.log("process nextTick 3"))
process.nextTick(() => console.log("process nextTick 4"))

Promise.resolve().then(() => console.log("promise resolved"))

setTimeout(() => console.log("Timer callback execute"), 5*1000)

for(let i = 0; i < 10000000; i++){

}
console.log(a)
console.log("program end")
