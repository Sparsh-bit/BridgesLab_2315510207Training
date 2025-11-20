// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Uses Fake Store API to fetch product data and log it. Optional: create simple HTML cards.

"use strict";

async function fetchProducts() {
  const apiUrl = "https://fakestoreapi.com/products";

  try {
    console.log("Fetching products from Fake Store API...");
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const products = await response.json();

    console.log(`Received ${products.length} products:\n`);

    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("----------------------------");
    });

    // Bonus: create simple product cards if running in a browser with DOM support
    if (typeof document !== "undefined") {
      const containerId = "product-container";
      let container = document.getElementById(containerId);

      if (!container) {
        container = document.createElement("div");
        container.id = containerId;
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
        container.style.gap = "16px";
        container.style.marginTop = "16px";
        document.body.appendChild(container);
      }

      products.forEach((product) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "8px";
        card.style.padding = "8px";
        card.style.textAlign = "center";
        card.style.backgroundColor = "#fff";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.style.maxWidth = "100px";
        img.style.maxHeight = "100px";
        img.style.objectFit = "contain";
        img.style.display = "block";
        img.style.margin = "0 auto 8px";

        const title = document.createElement("div");
        title.textContent = product.title;
        title.style.fontSize = "0.9rem";
        title.style.marginBottom = "4px";

        const price = document.createElement("div");
        price.textContent = `$${product.price}`;
        price.style.color = "green";
        price.style.fontWeight = "bold";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);

        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error("Error details:", error.message);
  }
}

// Call the function (works in browser; in Node.js, ensure fetch is available)
fetchProducts();
