"use strict";

let expenses=[12000,3000,25000,4000,6000];
let total=expenses.reduce((a,b)=>a+b,0);
let avg=total/expenses.length;
let final=total*1.10;

console.log("Total:",total.toFixed(2));
console.log("Average:",avg.toFixed(2));
console.log("After Tax:",final.toFixed(2));
