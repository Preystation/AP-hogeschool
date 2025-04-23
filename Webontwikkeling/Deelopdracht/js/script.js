/*alles voor button*/
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("wishlist-button")) {
    const button = event.target;

    if (button.classList.contains("active")) {
      button.classList.remove("active");
      button.style.backgroundColor = "";
    } else {
      button.classList.add("active");
      button.style.backgroundColor = "blue";
    }
  }
});

let cart = [];

function addToCart(name, price) {
  const item = cart.find(product => product.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(name) {
  cart = cart.filter(product => product.name !== name);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - €${product.price} x ${product.quantity}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Verwijderen';
    removeButton.onclick = () => removeFromCart(product.name);
    li.appendChild(removeButton);
    cartItems.appendChild(li);
    total += product.price * product.quantity;
  });
  cartTotal.textContent = total;
}























let map = L.map('map').setView([51.2287, 4.4177], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Voeg een marker toe voor Het Gouden Anker
L.marker([51.2287, 4.4177]).addTo(map)
  .bindPopup('<b>Het Gouden Anker</b><br>Binnenvaartstraat 50, 2000 Antwerpen')
  .openPopup();

// Voeg een marker toe voor Woonzorgcentrum Cadiz
L.marker([51.2295, 4.4165]).addTo(map)
  .bindPopup('<b>Woonzorgcentrum Cadiz</b><br>Napelsstraat 70, 2000 Antwerpen');

// Voeg een marker toe voor Ziekenhuis ZAS Cadix
L.marker([51.2310, 4.4200]).addTo(map)
  .bindPopup('<b>Ziekenhuis ZAS Cadix</b><br>Kempenstraat 100, 2030 Antwerpen');






