// Q9 – Debugging the Event Loop
"use strict";

/*
Predicted output order:

1. "Script start"      (synchronous)
2. "Script end"        (synchronous)
3. "Promise callback"  (microtask queue)
4. "Timeout callback"  (macrotask queue via setTimeout)

Explanation:
- Synchronous code runs first.
- setTimeout schedules its callback in the macrotask queue.
- Promise.resolve().then(...) schedules its callback in the microtask queue.
- After synchronous code and the current call stack finish, the engine processes
  all microtasks before moving on to the macrotask queue. Hence, the Promise
  callback runs before the setTimeout callback.
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");
