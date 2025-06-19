// Globale Variable für den Warenkorb
let cart = [];

// Lade Warenkorb aus LocalStorage
function loadCart() {
  const saved = localStorage.getItem('driftgarageCart');
  cart = saved ? JSON.parse(saved) : [];
}

// Speichere Warenkorb ins LocalStorage
function saveCart() {
  localStorage.setItem('driftgarageCart', JSON.stringify(cart));
}

// Zeige/Werte den Warenkorb aus
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartCount     = document.getElementById('cart-count');
  cartItemsList.innerHTML = '';
  cartCount.textContent   = cart.length;

  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    const btn = document.createElement('button');
    btn.textContent = '✕';
    btn.onclick = () => {
      cart.splice(i, 1);
      saveCart();
      updateCart();
    };
    li.appendChild(btn);
    cartItemsList.appendChild(li);
  });
}

// Artikel hinzufügen
function addToCart(name, price) {
  // Preis als Zahl extrahieren
  const num = parseFloat(price.replace(/[^\d,.-]/g, '').replace(',', '.'));
  cart.push({ name, price: `${num.toFixed(2)} €` });
  saveCart();
  updateCart();
}

// Warenkorb leeren
function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

// Alles initialisieren, sobald DOM fertig ist
document.addEventListener('DOMContentLoaded', () => {
  // 1. Warenkorb laden
  loadCart();
  // 2. Warenkorb anzeigen
  updateCart();
  // 3. Klick-Handler fürs Icon
  document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('hidden');
  });
});
