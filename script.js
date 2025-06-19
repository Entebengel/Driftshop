// Warenkorb-Elemente
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");

// Warenkorb-Array mit Objekten {name, price}
let cartItems = [];

// Warenkorb anzeigen/verstecken
cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

// Artikel zum Warenkorb hinzufügen
function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

// Warenkorb leeren
function clearCart() {
  cartItems = [];
  updateCart();
}

// Warenkorb aktualisieren und anzeigen
function updateCart() {
  cartCount.textContent = cartItems.length;
  cartItemsList.innerHTML = "";

  if (cartItems.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Dein Warenkorb ist leer.";
    cartItemsList.appendChild(li);
  } else {
    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price}`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.style.marginLeft = "10px";
      removeBtn.style.background = "transparent";
      removeBtn.style.color = "white";
      removeBtn.style.border = "none";
      removeBtn.style.cursor = "pointer";
      removeBtn.onclick = () => {
        cartItems.splice(index, 1);
        updateCart();
      };

      li.appendChild(removeBtn);
      cartItemsList.appendChild(li);
    });
  }
}

// Initiale Anzeige aktualisieren
updateCart();
