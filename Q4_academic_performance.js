"use strict";

let marks=[85,90,78,88,92];
let anyFail = marks.some(m=>m<35);
let percent = marks.reduce((a,b)=>a+b,0)/5;

if(anyFail) console.log("Detained");
else if(percent>=85) console.log("Promoted with Distinction");
else if(percent>=50) console.log("Promoted");
else console.log("Detained");
