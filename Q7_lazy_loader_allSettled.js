// Q7 – The Lazy Loader: Promise Combinator Practice
"use strict";

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Profile failed to load"));
      } else {
        resolve("Profile Loaded");
      }
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Posts failed to load"));
      } else {
        resolve("Posts Loaded");
      }
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Messages failed to load"));
      } else {
        resolve("Messages Loaded");
      }
    }, 1000);
  });
}

async function loadDashboard() {
  const startTime = Date.now();
  console.log("Dashboard loading started...");

  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages(),
  ]);

  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    if (result.status === "fulfilled") {
      console.log(`${moduleName} succeeded:`, result.value);
    } else {
      console.warn(`${moduleName} failed:`, result.reason.message);
    }
  });

  const endTime = Date.now();
  console.log(`Total time taken: ${(endTime - startTime)} ms`);
}

loadDashboard();
