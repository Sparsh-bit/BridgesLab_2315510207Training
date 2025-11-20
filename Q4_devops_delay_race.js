// Q4 – DevOps Delay: Async Timeout Race
"use strict";

function serverA() {
  return new Promise((resolve, reject) => {
    const delay = 2000;
    console.log("Server A: deployment started");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server A deployment failed"));
      } else {
        console.log("Server A: deployment completed");
        resolve("Server A");
      }
    }, delay);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    const delay = 3000;
    console.log("Server B: deployment started");
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Server B deployment failed"));
      } else {
        console.log("Server B: deployment completed");
        resolve("Server B");
      }
    }, delay);
  });
}

const promiseA = serverA();
const promiseB = serverB();

// Wait for both servers (all need to succeed)
Promise.all([promiseA, promiseB])
  .then(() => {
    console.log("Deployment completed for all servers");
  })
  .catch((error) => {
    console.error("Deployment error (Promise.all):", error.message);
  });

// Find the fastest server
Promise.race([promiseA, promiseB])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((error) => {
    console.error("Deployment error (Promise.race):", error.message);
  });
