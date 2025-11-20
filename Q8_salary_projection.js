"use strict";

let salary=30000;
let rate=10;
let table={};

for(let year=1;year<=5;year++){
  salary += salary*(rate/100);
  table["Year "+year]=Math.round(salary);
}

console.table(table);
