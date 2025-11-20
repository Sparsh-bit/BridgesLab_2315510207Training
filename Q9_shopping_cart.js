// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class CartItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getSubtotal() {
    return this.price * this.quantity;
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.couponDiscountPercent = 0;
  }

  addItem(name, price, quantity = 1) {
    const item = new CartItem(name, price, quantity);
    this.items.push(item);
  }

  // Calculate total before discount
  getTotal() {
    return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
  }

  // Validate coupon and apply discount
  applyCoupon(couponCode) {
    const regex = /^(SAVE|DISC)(\d{1,2})$/; // e.g., SAVE20, DISC10
    const match = couponCode.toUpperCase().match(regex);

    if (!match) {
      console.log("Invalid coupon format. Use SAVE20 or DISC10 style codes.");
      this.couponDiscountPercent = 0;
      return;
    }

    const discountPercent = parseInt(match[2], 10);
    this.couponDiscountPercent = discountPercent;
    console.log(`Coupon applied: ${discountPercent}% off`);
  }

  getFinalTotal() {
    const total = this.getTotal();
    const discountAmount = (total * this.couponDiscountPercent) / 100;
    return total - discountAmount;
  }
}

// Demo usage
const cart = new Cart();
cart.addItem("Laptop", 60000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Headphones", 2000, 1);

console.log("Cart items:");
cart.items.forEach((item) => {
  console.log(
    `- ${item.name} x${item.quantity} = ₹${item.getSubtotal().toFixed(2)}`
  );
});

console.log(`\nTotal before discount: ₹${cart.getTotal().toFixed(2)}`);
cart.applyCoupon("SAVE20");
console.log(
  `Final total after discount: ₹${cart.getFinalTotal().toFixed(2)}`
);

// To run: node Q9_shopping_cart.js
