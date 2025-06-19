const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
const cartItemsList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');

let cartItems = [];

function addToCart(name, price) {
  // Preis als Zahl extrahieren
  const numericPrice = parseFloat(price.replace('€', '').trim());

  cartItems.push({ name, price: numericPrice });
  updateCart();
}

function updateCart() {
  cartCount.textContent = cartItems.length;
  cartItemsList.innerHTML = '';

  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;

    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toFixed(2)} €`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✖';
    removeBtn.style.marginLeft = '10px';
    removeBtn.onclick = () => {
      removeItem(index);
    };

    li.appendChild(removeBtn);
    cartItemsList.appendChild(li);
  });

  const totalLi = document.createElement('li');
  totalLi.style.fontWeight = 'bold';
  totalLi.textContent = `Gesamt: ${total.toFixed(2)} €`;
  cartItemsList.appendChild(totalLi);
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function clearCart() {
  cartItems = [];
  updateCart();
}

cartIcon.addEventListener('click', () => {
  cart.classList.toggle('hidden');
});

updateCart();
