// calling elements
const navbar = document.querySelector('.navbar ');
const navbarLinks = document.querySelectorAll('.nav-link');
const navbarLogo = document.querySelector('.navbar-brand');

window.addEventListener('scroll', function () {
  if (window.scrollY > 350) {
    navbar.classList.add('navbar-scroll');
    navbarLinks.forEach((link) => {
      link.classList.add('nav-link-scroll');
      navbarLinks[navbarLinks.length - 1].classList.remove('nav-link-scroll');
    });

    navbarLogo.classList.add('nav-link-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
    navbarLinks.forEach((link) => {
      link.classList.remove('nav-link-scroll');
      navbarLinks[navbarLinks.length - 1].classList.remove('nav-link-scroll');
    });

    navbarLogo.classList.remove('nav-link-scroll');
  }
});
// const x = +prompt('Enter your order number');

// switch (x) {
//   case 1:
//     console.log('You ordered a pizza');
//     break;
//   case 2:
//     console.log('You ordered a burger');
//     break;
//   case 3:
//     console.log('You ordered a pasta');
//     break;
//   case 4:
//     console.log('You ordered a محشي ورق عنب ');
//     break;

//   default:
//     console.log('invalid order');
//     break; 
  
  
                                
// }