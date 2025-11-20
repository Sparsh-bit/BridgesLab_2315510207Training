// Q1: E-Commerce Product Manager (Classes + Objects)

// Product class definition
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Apply a percentage discount to the product price
  applyDiscount(percent) {
    const discountAmount = (this.price * percent) / 100;
    this.price = this.price - discountAmount;
  }

  // Return formatted product details
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price.toFixed(
      2
    )}, Category: ${this.category}`;
  }
}

// Create multiple product objects
const products = [
  new Product(1, "Wireless Mouse", 799, "Electronics"),
  new Product(2, "Gaming Keyboard", 2499, "Electronics"),
  new Product(3, "Office Chair", 5499, "Furniture"),
  new Product(4, "Notebook", 99, "Stationery"),
  new Product(5, "Smartphone", 18999, "Electronics"),
];

// Example: apply 10% discount to all products
products.forEach((product) => product.applyDiscount(10));

// Log all product details
console.log("All Products after 10% discount:");
products.forEach((product) => console.log(product.getDetails()));

// Filter and display products with price > 1000
const expensiveProducts = products.filter((product) => product.price > 1000);

console.log("\nProducts with price > 1000:");
expensiveProducts.forEach((product) => console.log(product.getDetails()));

// To run this file in Node.js:
// 1. Save as Q1_product_manager.js
// 2. Run: node Q1_product_manager.js
