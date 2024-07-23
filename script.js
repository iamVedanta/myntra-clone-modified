// Initialize cart array
let cart = [];

// Function to update cart display
function updateCart() {
  const cartButton = document.getElementById("cart-button");
  const cartItemsList = document.getElementById("cart-items");

  // Update cart button text
  cartButton.textContent = `Bag (${cart.length})`;

  // Clear previous cart items
  cartItemsList.innerHTML = "";

  // Add cart items to list
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    cartItemsList.appendChild(listItem);
  });
}

// Event delegation for add-to-cart buttons
document.body.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("add-to-cart")) {
    const product = event.target.getAttribute("data-product");
    cart.push(product);
    updateCart();
  }
});
// Select elements
const cartButton = document.querySelector(".bag");
const cartSection = document.querySelector("#cart");
const cartItemsList = document.querySelector("#cart-items");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Toggle cart visibility
cartButton.addEventListener("click", () => {
  cartSection.style.display =
    cartSection.style.display === "none" || !cartSection.style.display
      ? "block"
      : "none";
});

// Add item to cart
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button
      .closest(".product")
      .querySelector("p").textContent;

    // Create a new cart item element
    const cartItem = document.createElement("li");
    cartItem.textContent = productName;
    cartItemsList.appendChild(cartItem);
  });
});
