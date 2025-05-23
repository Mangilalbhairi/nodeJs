// const  {subs, mul} = require("./math")
const math = require("./math")
const count = require("./demo")


console.log(math.add(8,5))
console.log(math.mul(10,5))
// console.log(subs(8,4))
// console.log(mul(8,2))


//demo module code here
console.log(count.count)
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
// console.log(count.decrement())
console.log(count.countDisplay())
