"use strict";
// Q5 – Hoisting Lab: The Sequence Trap
// Original code (for reference):
//
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() {
//   console.log(status);
// }
//
// Hoisting explanation:
// - 'var score' is hoisted with initial value undefined.
// - 'announce' and 'startGame' function declarations are hoisted with their full definitions.
// - 'let status' is hoisted BUT kept in the temporal dead zone until its declaration line runs.
//   Accessing 'status' before its declaration throws a ReferenceError under ES6.
// - Calling startGame() before 'status' is initialized leads to an error.

console.log("=== Q5: Hoisting Lab (Fixed Version) ===");

// Fixed execution order:
var score = 50; // 'var' is hoisted but we also initialize before use

function announce() {
  console.log("Game started");
}

let status = "ready";

function startGame() {
  console.log("Status inside startGame ->", status);
}

console.log("Score before announce:", score);
announce();
startGame();

// Arrow function version (note: arrow functions assigned to const/let are NOT hoisted like function declarations)
const announceArrow = () => {
  console.log("Game started (arrow)");
};

const startGameArrow = () => {
  console.log("Status inside startGameArrow ->", status);
};

console.log("Using arrow functions now:");
announceArrow();
startGameArrow();

console.log(
  "Explanation: Function declarations are hoisted with definitions, " +
  "while arrow functions (assigned to const/let) are hoisted as variables only, " +
  "so they must be defined before being called."
);

console.log("========================================\n");
