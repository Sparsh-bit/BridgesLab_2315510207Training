// Q1 Scope Conflict Resolver
"use strict";

let bonus = 5000; // global bonus

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;

  if (isPermanent) salary += bonus;

  console.log("Total Salary:", salary);
  console.log("Global bonus remains:", bonus);
}

calculateSalary();

// Change isPermanent to false
function calculateSalaryTest() {
  let salary = 40000;
  let isPermanent = false;

  if (isPermanent) salary += bonus;

  console.log("When isPermanent = false:", salary);
}

calculateSalaryTest();
