let cart = [];

// Lade Warenkorb aus LocalStorage
function loadCart() {
  const savedCart = localStorage.getItem('driftgarageCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = [];
  }
}

// Speichere Warenkorb im LocalStorage
function saveCart() {
  localStorage.setItem('driftgarageCart', JSON.stringify(cart));
}

// Warenkorb aktualisieren und anzeigen
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  cartItems.innerHTML = '';
  cartCount.textContent = cart.length;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✕';
    removeBtn.style.marginLeft = '10px';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      saveCart();
      updateCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
}

// Produkt zum Warenkorb hinzufügen
function addToCart(name, price) {
  cart.push({ name, price });
  saveCart();
  updateCart();
}

// Warenkorb leeren
function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

// Warenkorb anzeigen/ausblenden
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCart();

  const cartIcon = document.getElementById('cart-icon');
  const cartDiv = document.getElementById('cart');
  cartIcon.addEventListener('click', () => {
    cartDiv.classList.toggle('hidden');
  });
});
