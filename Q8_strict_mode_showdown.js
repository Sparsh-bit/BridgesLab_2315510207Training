"use strict";
// Q8 – Strict Mode Showdown
// Original non-strict example (for reference):
//
// function demo(a, a) {
//   total = 10;
//   delete total;
// }
// demo(5, 10);
//
// In non-strict mode:
// - Duplicate parameter names are allowed (though bad practice).
// - 'total = 10;' creates an implicit global variable.
// - 'delete total;' returns false but does not throw an error.
// In strict mode, both duplicate parameters and deleting plain identifiers are illegal.

console.log("=== Q8: Strict Mode Showdown ===");
console.log("Non-strict style behavior is described in comments.");

// Correct ES6-compliant version:
function demoStrict(a, b) {
  // Properly declare variable
  let total = 10;
  // 'delete' cannot be used on local variables; it is meant for object properties.
  const obj = { total };
  delete obj.total; // valid: deleting an object property
  console.log("demoStrict -> a:", a, "b:", b, "total:", total, "obj:", obj);
}

demoStrict(5, 10);

console.log(
  "Explanation: In strict mode, you cannot use duplicate parameter names, " +
  "cannot create implicit globals, and cannot delete plain variables. " +
  "You must follow ES6 rules like unique parameter names and declared variables."
);

console.log("====================================\n");
