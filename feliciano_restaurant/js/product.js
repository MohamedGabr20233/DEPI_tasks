'use strict';
// call elements

const btnAll = document.getElementById('product_filter-all');
const btnGraphic = document.getElementById('product_filter-graphic');
const btnWeb = document.getElementById('product_filter-web');
const btnBranding = document.getElementById('product_filter-branding');

const cardProducts = Array.from(document.querySelectorAll('.card_product'));

// events
//todo show all the cardProducts
btnAll.addEventListener('click', () => {
  cardProducts.forEach((card) => {
    card.style.display = 'block';
  });
});

//todo hide the first card
btnGraphic.addEventListener('click', () => {
  for (let i = 0; i < cardProducts.length; i++) {
    if (i == 0) {
      cardProducts[i].style.display = 'none';
    } else {
      cardProducts[i].style.display = 'block';
    }
  }
});
//todo hide the 2 / 3 / 6 card
btnWeb.addEventListener('click', () => {
  for (let i = 0; i < cardProducts.length; i++) {
    if (i == 0 || i == 3 || i == 4) {
      cardProducts[i].style.display = 'block';
    } else {
      cardProducts[i].style.display = 'none';
    }
  }
});
//todo hide the first card
btnBranding.addEventListener('click', () => {
  for (let i = 0; i < cardProducts.length; i++) {
    if (i == 1 || i == 5) {
      cardProducts[i].style.display = 'block';
    } else {
      cardProducts[i].style.display = 'none';
    }
  }
});
