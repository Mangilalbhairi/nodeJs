function loop() {
    console.log("start")
  process.nextTick(loop);
  
}

loop();




console.log("End");
console.log("End");
