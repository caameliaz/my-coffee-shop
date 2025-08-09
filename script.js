// boutons principaux (menu, recherche, panier)
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');
let cartBtn = document.querySelector('#cart-btn');
let cartItem = document.querySelector('.cart-items-container');

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

// LOGIQUE POUR "ADD TO CART"
let addToCartButtons = document.querySelectorAll('.btn');
let cartContainer = document.querySelector('.cart-items-container');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    // Trouver la .box parente (produit cliqué)
    let box = button.closest('.box');
    if (!box) return;

    // Récupérer les infos du produit
    let image = box.querySelector('img')?.src;
    let title = box.querySelector('h3')?.innerText;
    let price = box.querySelector('.price')?.innerText;

    // Créer un nouveau cart-item
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

    // Ajouter au panier
    cartContainer.appendChild(item);
    cartItem.classList.add('active'); // ouvrir le panier

    // Gérer suppression avec la croix ❌
    item.querySelector('.fa-times').addEventListener('click', () => {
      item.remove();
    });
  });
});

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    let box = button.closest('.box');
    if (!box) return;

    let image = box.querySelector('img')?.src;
    let title = box.querySelector('h3')?.innerText;
    let price = box.querySelector('.price')?.innerText;

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

    // ⚠️ Ajouter à la fin du panier
    cartContainer.appendChild(item);

    // ✅ Rebrancher le bouton ❌ pour cette entrée spécifique
    item.querySelector('.fa-times').addEventListener('click', () => {
      item.remove();
    });

    // Facultatif : ouvrir le panier automatiquement
    cartContainer.classList.add('active');
  });
});
