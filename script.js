// Globale Variable für den Warenkorb
let cart = [];

// Lade Warenkorb aus LocalStorage
function loadCart() {
  console.log('loadCart aufgerufen');
  const saved = localStorage.getItem('driftgarageCart');
  cart = saved ? JSON.parse(saved) : [];
  console.log('Aktueller Warenkorb nach Laden:', cart);
}

// Speichere Warenkorb ins LocalStorage
function saveCart() {
  console.log('saveCart aufgerufen, Warenkorb:', cart);
  localStorage.setItem('driftgarageCart', JSON.stringify(cart));
}

// Aktualisiere den Warenkorb im DOM
function updateCart() {
  console.log('updateCart aufgerufen');
  const cartItemsList = document.getElementById('cart-items');
  const cartCount     = document.getElementById('cart-count');

  if (!cartItemsList || !cartCount) {
    console.error('Elemente #cart-items oder #cart-count nicht gefunden');
    return;
  }

  cartItemsList.innerHTML = '';
  cartCount.textContent   = cart.length;

  let total = 0;

  cart.forEach((item, i) => {
    total += item.priceNum;

    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.priceStr}`;

    const btn = document.createElement('button');
    btn.textContent = '✕';
    btn.onclick = () => {
      console.log('Entferne Artikel Index:', i);
      cart.splice(i, 1);
      saveCart();
      updateCart();
    };
    li.appendChild(btn);
    cartItemsList.appendChild(li);
  });

  const totalLi = document.createElement('li');
  totalLi.style.fontWeight = 'bold';
  totalLi.textContent = `Gesamt: ${total.toFixed(2)} €`;
  cartItemsList.appendChild(totalLi);
  console.log('Warenkorb gerendert mit Total:', total);
}

// Artikel zum Warenkorb hinzufügen
function addToCart(name, priceStr) {
  console.log('addToCart aufgerufen mit:', name, priceStr);
  const num = parseFloat(
    priceStr.replace(/[^\d,.-]/g, '').replace(',', '.')
  );
  if (isNaN(num)) {
    alert('Preis konnte nicht gelesen werden!');
    return;
  }
  cart.push({
    name,
    priceNum: num,
    priceStr: `${num.toFixed(2)} €`
  });
  saveCart();
  updateCart();
}

// Warenkorb leeren
function clearCart() {
  console.log('clearCart aufgerufen');
  cart = [];
  saveCart();
  updateCart();
}

// Initialisierung nach DOM-Load
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  loadCart();
  updateCart();

  const icon  = document.getElementById('cart-icon');
  const panel = document.getElementById('cart');
  if (icon && panel) {
    icon.addEventListener('click', () => {
      panel.classList.toggle('hidden');
      console.log('Warenkorb toggled');
    });
  } else {
    console.error('Elemente #cart-icon oder #cart nicht gefunden');
  }

  // Exponiere addToCart global, falls onclick="" in HTML greift
  window.addToCart = addToCart;
  window.clearCart = clearCart;
});
