"use strict";
// Q4 – Debugging Mystery
// Original problem:
// function showMessage() {
//   greeting = "Welcome"; // undeclared
//   console.log(greeting);
// }
// showMessage();
// In strict mode, assigning to an undeclared variable throws a ReferenceError
// because strict mode does NOT allow implicit globals.

function showMessageFixed() {
  // We properly declare the variable with let/const/var
  let greeting = "Welcome";
  console.log("Inside showMessageFixed ->", greeting);
}

console.log("=== Q4: Debugging Mystery ===");
showMessageFixed();
console.log(
  "Explanation: In strict mode, variables must be declared (let/const/var). " +
  "Without declaration, 'greeting' would have become an implicit global in non-strict mode."
);

// Debugging hint:
// 1. Place a breakpoint on the line inside showMessageFixed.
// 2. Run the file in VS Code's debugger.
// 3. Add 'greeting' as a watch variable to see its value when the function executes.
// 4. Observe the call stack panel to see how execution enters showMessageFixed.

console.log("================================\n");
