console.log("start")

setTimeout(() => {
    console.log("timer 1")
    process.nextTick(() => console.log("next inside setTimeout"))
},0)

process.nextTick(() =>  console.log("nextTick 1"))

Promise.resolve().then(()=> console.log("promise resolve"))

setTimeout(() => console.log("timer 2"),0)

console.log("end")