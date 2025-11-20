// Q10 – The Final Delivery: Async Pipeline Debugger
"use strict";

// Helper to create a step with random delay and possible failure
function createStep(stepName) {
  return function () {
    return new Promise((resolve, reject) => {
      const delay = 1000 + Math.floor(Math.random() * 1000); // 1–2 seconds
      console.log(`${stepName} started (delay ~${delay} ms)`);

      setTimeout(() => {
        // 20% chance to fail
        if (Math.random() < 0.2) {
          reject(new Error(`${stepName} failed`));
        } else {
          console.log(`${stepName} completed`);
          resolve(stepName);
        }
      }, delay);
    });
  };
}

const takeOrder = createStep("Step 1: Order taken");
const prepare = createStep("Step 2: Food prepared");
const pack = createStep("Step 3: Package ready");
const dispatch = createStep("Step 4: Out for delivery");
const deliver = createStep("Delivery completed!");

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    await takeOrder();
    await prepare();
    await pack();
    await dispatch();
    await deliver();
    console.log("Pipeline finished successfully ✅");
  } catch (error) {
    console.error("Pipeline failed! ❌");
    console.error("Reason:", error.message);
  }
}

runPipeline();

/*
Async behavior & event loop explanation:

- Each step function returns a Promise that resolves or rejects after a random delay.
- runPipeline() is declared as async, so it returns a Promise and allows us to use 'await'.
- When we 'await' a Promise, JavaScript pauses execution of runPipeline at that line
  and returns control to the event loop. Other code (or tasks) can run meanwhile.
- Once the Promise settles (resolves or rejects), the corresponding continuation of
  runPipeline is queued as a microtask and executed when the call stack is free.
- The try/catch inside runPipeline allows us to handle any rejection from any awaited
  step in one place, instead of chaining multiple .then().catch() calls.
*/
