
"use strict"


const fancy = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;

const spiner2 = function() {

  for (let char of fancy) {
    setTimeout(() => process.stdout.write(`\r${char}   `), delay);
    delay += 200;
  }
  setTimeout(() => process.stdout.write('\n'), delay);
}
spiner2(fancy); 

