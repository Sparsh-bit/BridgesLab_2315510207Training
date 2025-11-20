"use strict";
// Q7 – Smart Calculator
// Uses switch, custom error handling, and formatted summary.

const operations = ["add", "divide", "power", "root", "subtract", "unknown"];
const num1 = 25;
const num2 = 0;

// Custom error type for invalid operation
class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) {
        throw new Error("Cannot take root of a negative number");
      }
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(`Operation '${operation}' is not recognized`);
  }
}

console.log("=== Q7: Smart Calculator ===");

for (let i = 0; i < operations.length; i++) {
  const op = operations[i];
  try {
    const result = calculate(op, num1, num2);
    console.log(
      `Operation: ${op.toUpperCase()} | Input: (${num1}, ${num2}) | Result: ${result}`
    );
  } catch (err) {
    console.log(
      `Operation: ${op.toUpperCase()} | Error: [${err.name}] ${err.message}`
    );
  }
}

console.log("===================================\n");
