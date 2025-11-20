"use strict";
// Q10 – Nested Hoisting and Closures
// Original function (valid JS but with hoisting surprises):
//
// function outer() {
//   console.log(count);
//   var count = 5;
//   function inner() {
//     console.log(count);
//     var count = 10;
//   }
//   inner();
// }
// outer();
//
// Prediction:
// outer's first console.log(count) -> undefined (because 'var count' is hoisted with value undefined)
// inner's console.log(count) -> undefined (inner has its own 'var count', hoisted to undefined inside inner)

console.log("=== Q10: Nested Hoisting and Closures ===");

function outer() {
  console.log("outer() first log, count =", count); // undefined due to hoisting
  var count = 5;
  console.log("outer() after assignment, count =", count); // 5

  function inner() {
    console.log("inner() first log, count =", count); // undefined due to inner's own hoisted var
    var count = 10;
    console.log("inner() after assignment, count =", count); // 10
  }

  inner();
}

outer();

// Arrow version of inner.
// Note: Even with arrow syntax, 'var count' inside creates a new variable in inner's scope.
function outerArrowVersion() {
  console.log("\nouterArrowVersion() demo");
  console.log("outerArrowVersion first log, count =", count2);
  var count2 = 5;

  const innerArrow = () => {
    console.log("innerArrow first log, count2 =", count2);
    var count2 = 10;
    console.log("innerArrow after assignment, count2 =", count2);
  };

  // This will still behave similarly: innerArrow's 'var count2' shadows outerArrowVersion's count2.
  innerArrow();
}

outerArrowVersion();

console.log(
  "\nExplanation: Each function (outer, inner) gets its own 'var' declarations hoisted " +
  "to the top of that function's scope. The variable exists with value 'undefined' " +
  "until the assignment line is executed. Arrow functions change 'this' binding behavior, " +
  "but they still create their own scope for 'var' declarations inside them."
);

// Debugging hint:
// 1. Run this file in a debugger and set breakpoints inside outer(), inner(), and innerArrow().
// 2. Watch the 'count' and 'count2' variables in the watch panel.
// 3. Observe how call stack moves from outer -> inner and outerArrowVersion -> innerArrow.

console.log("===========================================\n");
