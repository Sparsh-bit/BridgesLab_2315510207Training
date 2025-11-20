"use strict";
// Q9 – JSON Audit
// Parses raw JSON strings, validates schema, and converts age to number.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];

const cleanData = [];
const errorLog = [];
const under18Users = [];

console.log("=== Q9: JSON Audit ===");

for (let i = 0; i < rawData.length; i++) {
  const jsonString = rawData[i];
  try {
    const parsed = JSON.parse(jsonString);

    // Check for required keys: user, age
    if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
        !Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error("Missing required keys (user, age)");
    }

    // Convert age to Number
    const ageNumber = Number(parsed.age);
    if (Number.isNaN(ageNumber)) {
      throw new Error("Age is not a valid number");
    }

    const cleaned = { user: parsed.user, age: ageNumber };
    cleanData.push(cleaned);

    // Filter under-18 users
    if (ageNumber < 18) {
      under18Users.push(cleaned);
    }

    console.log(`Line ${i}: Valid entry ->`, cleaned);
  } catch (err) {
    errorLog.push({ line: i, error: err.message, raw: jsonString });
    console.log(`Line ${i}: Error -> ${err.message} | Raw -> ${jsonString}`);
  }

  // Debugging hint:
  // Set a breakpoint on the next line to see control flow on success vs error.
  // debugger; // uncomment during a debug session
}

console.log("\nClean data array:", cleanData);
console.log("Under-18 users:", under18Users);
console.log("Error log:", errorLog);

console.log("===================================\n");
