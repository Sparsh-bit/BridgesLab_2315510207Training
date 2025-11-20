// Q8 – Order Processing Flow: Async Retry Mechanism
"use strict";

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() >= 0.5; // 50% chance
      if (success) {
        resolve("Order submitted successfully");
      } else {
        reject(new Error("Order submission failed"));
      }
    }, 500);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success -> ${result}`);
      return; // Stop after first success
    } catch (error) {
      console.warn(`Attempt ${attempt}: Failed -> ${error.message}`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

(async () => {
  try {
    await processOrder();
    console.log("Order processing complete.");
  } catch (error) {
    console.error("Final result:", error.message);
  }
})();
