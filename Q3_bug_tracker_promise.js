// Q3 – Bug Tracker: Callback to Promise Migration
"use strict";

// Original callback-based function (for reference):
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// New Promise-based version
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3; // 30% chance to fail
      if (apiFailed) {
        reject(new Error("Bug API request failed"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

// Use the Promise version
getBugs()
  .then((bugs) => {
    console.log("Fetched bugs successfully:");
    console.table(bugs);
  })
  .catch((error) => {
    console.error("Error while fetching bugs:", error.message);
  });
