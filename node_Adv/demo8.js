console.log("start")

setTimeout(() => {
    process.nextTick(() => console.log("process nextTick 2"))
    process.nextTick(() => console.log("process nextTick 3"))
    process.nextTick(() => console.log("process nextTick 4"))
    process.nextTick(() => console.log("process nextTick 5"))
    Promise.resolve().then(() => console.log("promise 2"))
    Promise.resolve().then(() => console.log("promise 3"))
    Promise.resolve().then(() => console.log("promise 4"))
    console.log("timer 1")
}, 5* 1000)

process.nextTick(() => console.log("process nextTick 1"))

Promise.resolve().then(() => console.log("promise 1"))

setTimeout(()=> console.log("timer 2"), 0)

console.log("end")