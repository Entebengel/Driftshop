console.log("DriftGarage ist bereit!");

const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

let cartData = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  cartItems.innerHTML = "";
  cartData.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} (${item.price}) <button onclick="removeFromCart(${index})">x</button>`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cartData.length;
  localStorage.setItem("cart", JSON.stringify(cartData));
}

function addToCart(name, price) {
  cartData.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cartData.splice(index, 1);
  updateCart();
}

function clearCart() {
  cartData = [];
  updateCart();
}

cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

updateCart();

