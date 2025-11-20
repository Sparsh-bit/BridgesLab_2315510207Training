// Q2 applyOperation
"use strict";

function applyOperation(numbers, operation){
  const result = [];
  for(const n of numbers){
    result.push(operation(n));
  }
  return result;
}

console.log(applyOperation([1,2,3,4], n=>n*2));
console.log(applyOperation([1,2,3,4], n=>n*n));
