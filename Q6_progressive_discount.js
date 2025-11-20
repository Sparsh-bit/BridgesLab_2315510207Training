"use strict";

let total=12000;
let discount=0;

if(total>=10000) discount=25;
else if(total>=5000) discount=15;
else if(total>=2000) discount=5;

let final = total - (total*discount/100);

console.log("Original:",total);
console.log("Discount:",discount+"%");
console.log("Final:",Math.round(final));
