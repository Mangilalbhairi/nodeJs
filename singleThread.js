function blockCode(ms) {
    let start = Date.now();
   
   while(Date.now() - start < ms){
   console.log(Date.now(),"plus"+start)
   }
  

}
console.log("A")

setTimeout(() => console.log("B"), 0)


blockCode(1000)// block the sysnchronous code for one second

console.log("C")