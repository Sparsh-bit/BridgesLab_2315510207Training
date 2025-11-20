// Q1 – The Startup Morning: Async Coffee Maker
// Demonstrates Promises, async steps, chaining, and error handling.

"use strict";

// Helper to create a delay with random chance of failure
function simulateAsyncStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.floor(Math.random() * 1000); // 1–2 seconds
    console.log(`Starting: ${stepName} (will take ~${delay} ms)`);

    setTimeout(() => {
      // 25% chance to fail randomly
      if (Math.random() < 0.25) {
        reject(new Error(`${stepName} failed!`));
      } else {
        console.log(`Completed: ${stepName}`);
        resolve(stepName);
      }
    }, delay);
  });
}

function boilWater() {
  return simulateAsyncStep("Boiling water");
}

function brewCoffee() {
  return simulateAsyncStep("Brewing coffee");
}

function pourIntoCup() {
  return simulateAsyncStep("Pouring into cup");
}

// Promise chaining to simulate the process step by step
boilWater()
  .then(() => brewCoffee())
  .then(() => pourIntoCup())
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    console.error("Coffee process failed:", error.message);
  });
