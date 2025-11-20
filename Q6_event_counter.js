"use strict";

let count = 0;

function increment(){
  count++;
  console.log("Count:",count);

  function logInner(){ console.log("Inner sees:",count); }
  logInner();
}

function decrement(){
  count--;
  console.log("Count:",count);
}

increment();
increment();
decrement();
