"use strict";

let a=Math.floor(Math.random()*20)+1;
let b=Math.floor(Math.random()*20)+1;
let ops=['+','-','*','/'];
let op=ops[Math.floor(Math.random()*ops.length)];

let ans;

switch(op){
  case '+': ans=a+b; break;
  case '-': ans=a-b; break;
  case '*': ans=a*b; break;
  case '/': ans=(a/b).toFixed(2); break;
}

console.log(`Question: ${a} ${op} ${b}`);
console.log("Answer:",ans);
