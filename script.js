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

// Zeige und aktualisiere den Warenkorb im DOM
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  const cartCount     = document.getElementById('cart-count');
  // Prüfen, ob die Elemente existieren
  if (!cartItemsList || !cartCount) return;

  cartItemsList.innerHTML = '';
  cartCount.textContent   = cart.length;

  let total = 0;

  cart.forEach((item, i) => {
    total += item.priceNum;

    // Listeneintrag
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.priceStr}`;

    // Entfernen-Button
    const btn = document.createElement('button');
    btn.textContent = '✕';
    btn.style.marginLeft = '8px';
    btn.onclick = () => {
      cart.splice(i, 1);
      saveCart();
      updateCart();
    };

    li.appendChild(btn);
    cartItemsList.appendChild(li);
  });

  // Gesamtpreis
  const totalLi = document.createElement('li');
  totalLi.style.fontWeight = 'bold';
  totalLi.style.marginTop  = '0.5rem';
  totalLi.textContent = `Gesamt: ${total.toFixed(2)} €`;
  cartItemsList.appendChild(totalLi);
}

// Artikel hinzufügen
function addToCart(name, priceStr) {
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
  cart = [];
  saveCart();
  updateCart();
}

// Initialisierung nach DOM-Load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Warenkorb laden
  loadCart();
  // 2. Warenkorb anzeigen
  updateCart();

  // 3. Klick-Handler fürs Icon
  const icon = document.getElementById('cart-icon');
  const panel = document.getElementById('cart');
  if (icon && panel) {
    icon.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });
  }
});
