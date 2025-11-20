"use strict";
// Q1 – Dynamic Data Parser
// Demonstrates type conversion, validation, and reporting using console.log only.

// Mixed API data received from server
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numeric values
const validNumericData = [];
const invalidNumericData = [];

console.log("=== Q1: Dynamic Data Parser Report ===");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const valueType = typeof value;

  // Convert to different forms
  const asString = String(value);            // String conversion is always possible
  const asNumber = Number(value);            // May become NaN
  const asBoolean = Boolean(value);          // Truthy / falsy rules

  // Check if this is a valid numeric value
  // We treat "NaN", " ", and "100px" (and anything that becomes NaN) as invalid numbers.
  const isExplicitInvalidString =
    value === "NaN" || value === " " || value === "100px";
  const isNumericValid = !Number.isNaN(asNumber) && !isExplicitInvalidString;

  if (isNumericValid) {
    validNumericData.push(asNumber);
  } else {
    invalidNumericData.push(value);
  }

  // Detailed row-wise report
  console.log(`Index ${i}:`);
  console.log(`  Original -> value: ${value}, type: ${valueType}`);
  console.log(`  As String -> "${asString}"`);
  console.log(`  As Number ->`, asNumber);
  console.log(`  As Boolean ->`, asBoolean);
  console.log(`  Numeric validity ->`, isNumericValid ? "VALID" : "INVALID");
}

console.log("\nValid numeric data:", validNumericData);
console.log("Invalid numeric data:", invalidNumericData);
console.log("======================================\n");
