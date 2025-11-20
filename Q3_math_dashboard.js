"use strict";

let x = 16.75;

let result = `
Rounded: ${Math.round(x)}
Square Root: ${Math.sqrt(x)}
Power Cube: ${Math.pow(x,3)}
Random(10-50): ${Math.floor(Math.random()*41)+10}
`;

console.log(result);
