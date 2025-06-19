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
  cartItemsList.innerHTML = '';
  cartCount.textContent   = cart.length;

  let total = 0;

  cart.forEach((item, i) => {
    // Summiere nur den numerischen Wert
    total += item.priceNum;

    // Listeintrag mit Name und formatiertem Preis
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.priceStr}`;

    // Entfernen-Button
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

  // Gesamtpreis als letztes Listenelement
  const totalLi = document.createElement('li');
  totalLi.style.fontWeight = 'bold';
  totalLi.textContent = `Gesamt: ${total.toFixed(2)} €`;
  cartItemsList.appendChild(totalLi);
}

// Artikel zum Wa
