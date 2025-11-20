// Q5 – Frontend Rush: Avoiding Callback Hell
"use strict";

// --- Version 1: Nested callbacks (Callback Hell) ---

function design(callback) {
  setTimeout(() => {
    console.log("Stage 1: design complete");
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(() => {
    console.log("Stage 2: build complete");
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(() => {
    console.log("Stage 3: test complete");
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(() => {
    console.log("Stage 4: deploy complete");
    callback();
  }, 1000);
}

function celebrate(callback) {
  setTimeout(() => {
    console.log("Stage 5: celebrate 🎉");
    callback && callback();
  }, 1000);
}

console.log("Running pipeline with nested callbacks (callback hell):");

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Callback-based pipeline finished");
        });
      });
    });
  });
});

// --- Version 2: async/await with Promises (Cleaner) ---

function stage(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
}

async function runPipelineAsync() {
  console.log("\nRunning pipeline with async/await:");
  await stage("Stage 1: design complete");
  await stage("Stage 2: build complete");
  await stage("Stage 3: test complete");
  await stage("Stage 4: deploy complete");
  await stage("Stage 5: celebrate 🎉");
  console.log("Async/await pipeline finished");
}

runPipelineAsync();

/*
Why async/await improves readability:
- With nested callbacks, the code is deeply indented and harder to follow (callback hell).
- async/await allows us to write asynchronous logic in a top-to-bottom, linear style,
  similar to synchronous code.
- Error handling is also easier using try/catch around await calls.
*/
