"use strict";
// Q3 – Transaction Validator
// Validates transactions and categorizes errors.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

// Arrays to hold valid and invalid transactions
const validTransactions = [];
const invalidTransactions = [];

// Arrays to categorize error messages
const errorMessages = [];

console.log("=== Q3: Transaction Validator ===");

for (let i = 0; i < transactions.length; i++) {
  try {
    const tx = transactions[i];

    // Null entry check
    if (tx === null) {
      const nullError = new Error("Null transaction entry");
      nullError.name = "NullTransactionError";
      throw nullError;
    }

    // Check for missing properties
    if (tx.id === undefined || tx.amount === undefined) {
      const missingError = new Error("Missing amount or id");
      missingError.name = "MissingPropertyError";
      throw missingError;
    }

    // Check for negative amount
    if (tx.amount < 0) {
      const negativeError = new Error("Negative amount not allowed");
      negativeError.name = "NegativeAmountError";
      throw negativeError;
    }

    // If all checks pass, transaction is valid
    validTransactions.push(tx);
    console.log(`Valid transaction: id=${tx.id}, amount=${tx.amount}`);
  } catch (err) {
    invalidTransactions.push(transactions[i]);
    errorMessages.push({ index: i, name: err.name, message: err.message });
    console.log(
      `Invalid transaction at index ${i} -> (${err.name}): ${err.message}`
    );
  }

  // Debugging hint:
  // In VS Code, set a breakpoint on the line below to observe values of tx, validTransactions, invalidTransactions.
  // debugger; // uncomment during debugging to pause execution
}

// Final report
console.log("\nSummary Report:");
console.log("  Successful transactions:", validTransactions.length);
console.log("  Failed transactions:", invalidTransactions.length);
console.log("  Error details:", errorMessages);

console.log("====================================\n");
