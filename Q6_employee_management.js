// Q6: Employee Management System (Classes + Object Methods)

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    const bonusAmount = (this.salary * percent) / 100;
    this.salary = this.salary + bonusAmount;
    return this.salary;
  }
}

// Create 5 employee objects
const employees = [
  new Employee(1, "Aarav", "Engineering", 50000),
  new Employee(2, "Riya", "Marketing", 40000),
  new Employee(3, "Karan", "HR", 35000),
  new Employee(4, "Neha", "Finance", 60000),
  new Employee(5, "Vikram", "Support", 30000),
];

// Example: apply 10% bonus to all employees
employees.forEach((emp) => emp.applyBonus(10));

// Calculate annual salary for each
console.log("Employees and their annual salaries (after bonus):");
employees.forEach((emp) => {
  console.log(
    `ID: ${emp.id}, Name: ${emp.name}, Dept: ${emp.department}, Annual Salary: ₹${emp
      .getAnnualSalary()
      .toFixed(2)}`
  );
});

// Use reduce() to calculate total annual payout of the company
const totalAnnualPayout = employees.reduce(
  (total, emp) => total + emp.getAnnualSalary(),
  0
);

console.log(`\nTotal annual payout of the company: ₹${totalAnnualPayout.toFixed(2)}`);

// To run: node Q6_employee_management.js
