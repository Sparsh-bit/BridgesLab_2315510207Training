"use strict";
// Q6 – Pyramid Pattern Generator
// Generates a simple star pyramid and demonstrates 'let' vs 'var' behavior in loops.

console.log("=== Q6: Pyramid Pattern Generator ===");

// Outer loop limit controlled by a variable (could be taken from user input in browser using prompt())
let rows = 5; // default = 5

console.log("Pyramid using 'let' in loops:");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}

// Now, same logic with 'var' for comparison
console.log("\nPyramid using 'var' in loops:");
for (var a = 1; a <= rows; a++) {
  var lineVar = "";
  for (var b = 1; b <= a; b++) {
    lineVar += "* ";
  }
  console.log(lineVar.trim());
}

// Note: With 'var', the loop variables a and b are function-scoped (or global here),
// so they remain accessible after the loops end.
console.log("\nAfter loops, 'a' is:", a);
console.log("After loops, 'b' is:", b);
// If we had used 'let', accessing i or j outside the loop would throw a ReferenceError in strict mode.

console.log(
  "Explanation: 'use strict' helps catch issues like using an undeclared variable. " +
  "Try intentionally using an undeclared variable (e.g., x = 10) to see an error."
);

console.log("========================================\n");
