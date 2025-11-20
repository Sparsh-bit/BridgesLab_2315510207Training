"use strict";
// Q2 – Employee Bonus Calculator
// Converts string properties, calculates bonus, and uses try...catch for safety.

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

console.log("=== Q2: Employee Bonus Calculator ===");

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    // Basic property checks
    if (!emp.name || emp.salary === undefined || emp.years === undefined) {
      throw new Error("Missing required employee property");
    }

    // Convert salary and years to numbers
    const salaryNum = Number(emp.salary);
    const yearsNum = Number(emp.years);

    if (Number.isNaN(salaryNum) || Number.isNaN(yearsNum)) {
      throw new Error("Failed to convert salary/years to number");
    }

    // Bonus calculation logic:
    // bonus = salary * 0.1 if years > 3 else salary * 0.05
    let bonus;
    if (yearsNum > 3) {
      bonus = salaryNum * 0.1;
    } else {
      bonus = salaryNum * 0.05;
    }

    const totalWithBonus = salaryNum + bonus;

    // Using template strings for formatted output
    console.log(
      `Employee: ${emp.name}, Salary: ${salaryNum}, Years: ${yearsNum}, ` +
      `Bonus: ${bonus.toFixed(2)}, Total Payout: ${totalWithBonus.toFixed(2)}`
    );
  } catch (error) {
    // If any error occurs in conversion or missing property, it is caught here
    console.log(`Error processing employee at index ${i}:`, error.message);
  }
}

console.log("====================================\n");
