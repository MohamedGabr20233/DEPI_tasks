//? calling elements
const navbar = document.querySelector('.nav_box');
const navList = document.querySelectorAll('.nav_item_link');
//code

window.addEventListener('scroll', function () {
  console.log(1);
  if (document.body.getBoundingClientRect().y > -300) {
    //  header.classList.add('nav-color');
    navbar.classList.remove('stick_navbar');
    navList.forEach((link) => (link.style.color = '#ffff') );
  } else {
    navbar.classList.add('stick_navbar');
    navList.forEach((link) => (link.style.color = 'rgb(143, 143, 143)'));

    //  header.classList.remove('nav-color');
  }
});
