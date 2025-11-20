// Q2 – Task Scheduler: Micro vs Macro Challenge
// Demonstrates the order of synchronous logs, microtasks (Promises), and macrotasks (setTimeout).

"use strict";

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise.then callback (microtask)");
  });

console.log("Synchronous log between tasks");

console.log("End");

/*
Expected order:
1. "Start"                     -> synchronous
2. "Synchronous log..."        -> synchronous
3. "End"                       -> synchronous
4. "Promise.then callback..."  -> microtask (runs after current call stack, before macrotasks)
5. "setTimeout callback..."    -> macrotask (executed in the next event loop tick)

Explanation:
- Synchronous code always runs first.
- Resolved Promises queue their callbacks in the microtask queue.
- setTimeout callbacks go into the macrotask (task) queue.
- After the call stack is empty, the JS engine first empties the microtask queue,
  THEN processes macrotasks. That's why Promise callbacks run before setTimeout.
*/
