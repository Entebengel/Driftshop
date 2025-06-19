// Warenkorb-Elemente
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");

// Beispiel: Leerer Warenkorb
let cartItems = [];

// Warenkorb anzeigen/verstecken
cartIcon.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

// Funktion um Artikel hinzuzufügen (später an Shop-Buttons anbinden)
function addToCart(productName) {
  cartItems.push(productName);
  updateCart();
}

// Warenkorb leeren
function clearCart() {
  cartItems = [];
  updateCart();
}

// Warenkorb aktualisieren
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
      li.textContent = item;

      // Optional: Button zum Entfernen einzelner Artikel
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

// Initial aktualisieren
updateCart();
