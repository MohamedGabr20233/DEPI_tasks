//? calling elements
const boxNavBig = document.querySelector('.nav_big_box');

const navListSmall = document.querySelector(' .nav_list-small');
const navListBig = document.querySelector('.nav_list-big');

const navBox = document.querySelector('.nav_big_box');

const btnNav = document.querySelector('.nav_input_area');
const innerBtnNav = document.querySelector('.btn_nav');
//* global variables

const breakpoint = 750;
let labelStatue = 'closed';

function reseatTheBtnStatus() {
  labelStatue = 'closed';
  innerBtnNav.classList.remove('nav_btn_animation-start');
}

window.addEventListener('resize', () => {
  //todo check if the current window higher than breakpoint
  if (document.body.clientWidth > breakpoint) {
    //* hide the small list item
    navListSmall.style.display = 'none';
    //* show the large list
    navListBig.style.display = 'flex';

    //*hide the button
    btnNav.style.display = 'none';

    //* set the height back
    boxNavBig.style.height = '7.2rem';

    reseatTheBtnStatus();
  } else {
    //* hide the large list
    navListBig.style.display = 'none';

    //*show the button
    btnNav.style.display = 'flex';
  }
});

window.addEventListener('load', () => {
  //todo check if the current window higher than breakpoint
  if (document.body.clientWidth > breakpoint) {
    //* hide the small list item
    navListSmall.style.display = 'none';

    //*hide the button
    btnNav.style.display = 'none';

    //* set the height back
    boxNavBig.style.height = '7.2rem';

    reseatTheBtnStatus();
  } else {
    //* hide the large list
    navListBig.style.display = 'none';

    //*show the button
    btnNav.style.display = 'flex';
  }
});

// the btn

btnNav.addEventListener('click', (e) => {
  //*   toggle the small list
  innerBtnNav.classList.toggle('nav_btn_animation-start');

  //* toggle the large box height animation

  if (labelStatue == 'closed') {
    navListSmall.style.display = 'flex';
    boxNavBig.style.height = '40.4rem';

    labelStatue = 'opened';
  } else {
    navListSmall.style.display = 'none';
    boxNavBig.style.height = '7.2rem';
    labelStatue = 'closed';
  }
});
