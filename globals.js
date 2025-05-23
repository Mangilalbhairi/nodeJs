console.log("start")
console.log(__dirname)//print the directory name 
console.log(__filename)// also print file name
console.log(globalThis)//it's refer to global object in node environment 

global.value = 123;
let a = 10;
function printModifiedGlobal(){
    // console.log(global.value)
    console.log(global)
    console.log(global.a)
}

printModifiedGlobal()


//Accessing process global

console.log("platform", process.platform)
console.log("process id:", process.pid)
console.log("current direactory", process.cwd())
console.log("env variable", process.env)

process.nextTick(() => console.log("inside nextTick"))

console.log("end")