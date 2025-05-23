const add = (a,b) => a + b;
const subs = (a,b) => a - b;
const mul = (a,b) => a * b;

// exports.add = add;
module.exports = subs //default  export 

module.exports = {
    add, mul
}
