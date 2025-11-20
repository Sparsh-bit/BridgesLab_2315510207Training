"use strict";

function makeMultiplier(mult){
  return function(num){
    return num*mult;
  };
}

const triple=makeMultiplier(3);
console.log(triple(5));
