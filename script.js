// =========================
// 🎛️ Sélecteurs principaux
// =========================
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let cartBtn = document.querySelector('#cart-btn');
let cartItem = document.querySelector('.cart-items-container');

// =========================
// 🧭 Menu / Search / Panier
// =========================
menu.onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
};

searchBtn.onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
};

cartBtn.onclick = () => {
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
};

// =========================
// 🛒 Logique du panier
// =========================
let addToCartButtons = document.querySelectorAll('.btn');
let cartContainer = document.querySelector('.cart-items-container');

// Fonction pour ajouter un produit au panier
function addItemToCart(image, title, price) {
  let item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerHTML = `
    <span class="fas fa-times"></span>
    <img src="${image}" alt="">
    <div class="content">
      <h3>${title}</h3>
      <div class="price">${price}</div>
    </div>
  `;

  // Ajouter dans le panier
  cartContainer.appendChild(item);

  // 🔄 Rebrancher la croix ❌ pour supprimer
  item.querySelector('.fa-times').addEventListener('click', () => {
    item.remove();
  });
}

// Événement sur chaque bouton "Add to cart"
addToCartButtons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    let box = button.closest('.box');
    if (!box) return;

    let image = box.querySelector('img')?.src;
    let title = box.querySelector('h3')?.innerText;
    let price = box.querySelector('.price')?.innerText;

    addItemToCart(image, title, price);
    cartItem.classList.add('active');
  });
});

// =========================
// ❌ Bouton pour fermer le panier
// =========================
const closeCartBtn = document.createElement('button');
closeCartBtn.innerText = '×';
closeCartBtn.classList.add('close-cart');
cartContainer.prepend(closeCartBtn);

closeCartBtn.addEventListener('click', () => {
  cartItem.classList.remove('active');
});

// =========================
// ✨ Effet fade-in au scroll
// =========================
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < trigger) {
      sec.classList.add("visible");
    }
  });
});
