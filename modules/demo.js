 var count = 0;
function countDisplay () {
    return count
}

exports.count = count;
module.exports = {
    count,
    increment : () => count +=1,
    decrement : () => count -=1,
    countDisplay,
    
}
// exports.count = count;