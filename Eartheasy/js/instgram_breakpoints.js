//? calling elements

const box_10 = document.getElementById('instagram_box-10');
const box_5 = document.getElementById('instagram_box-5');

const box_4 = document.getElementById('instagram_box-4');
const box_9 = document.getElementById('instagram_box-9');

const box_3 = document.getElementById('instagram_box-3');
const box_8 = document.getElementById('instagram_box-8');

const box_2 = document.getElementById('instagram_box-2');
const box_7 = document.getElementById('instagram_box-7');

const instBoxes = document.querySelectorAll('.instagram_box');

//global breakpoints values

const breakpoint_1 = 900;
const breakpoint_2 = 700;
const breakpoint_3 = 530;
const breakpoint_4 = 330;

// breakpoint 1
window.addEventListener('resize', () => {
  if (document.body.clientWidth <= breakpoint_1) {
    box_5.style.display = 'none';
    box_10.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '25%';
      element.style.paddingBottom = '30%';
    });
  } else {
    box_5.style.display = 'block';
    box_10.style.display = 'block';
  }
});
window.addEventListener('load', () => {
  if (document.body.clientWidth <= breakpoint_1) {
    box_5.style.display = 'none';
    box_10.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '25%';
      element.style.paddingBottom = '30%';
    });
  } else {
    box_5.style.display = 'block';
    box_10.style.display = 'block';
  }
});

// breakpoint 2

window.addEventListener('resize', () => {
  if (document.body.clientWidth <= breakpoint_2) {
    box_4.style.display = 'none';
    box_9.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '33.33333%';
      element.style.paddingBottom = '40.33333%';
    });
  } else {
    box_4.style.display = 'block';
    box_9.style.display = 'block';
  }
});

window.addEventListener('load', () => {
  if (document.body.clientWidth <= breakpoint_2) {
    box_4.style.display = 'none';
    box_9.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '33.33333%';
      element.style.paddingBottom = '40.33333%';
    });
  } else {
    box_4.style.display = 'block';
    box_9.style.display = 'block';
  }
});
// breakpoint 3

window.addEventListener('resize', () => {
  if (document.body.clientWidth <= breakpoint_3) {
    box_3.style.display = 'none';
    box_8.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '50%';
      element.style.paddingBottom = '55%';
    });
  } else {
    box_3.style.display = 'block';
    box_8.style.display = 'block';
  }
});

window.addEventListener('load', () => {
  if (document.body.clientWidth <= breakpoint_3) {
    box_3.style.display = 'none';
    box_8.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '50%';
      element.style.paddingBottom = '55%';
    });
  } else {
    box_3.style.display = 'block';
    box_8.style.display = 'block';
  }
});
// breakpoint 4

window.addEventListener('resize', () => {
  if (document.body.clientWidth <= breakpoint_4) {
    box_2.style.display = 'none';
    box_7.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '100%';
      element.style.paddingBottom = '110%';
    });
  } else {
    box_2.style.display = 'block';
    box_7.style.display = 'block';
  }
});

window.addEventListener('load', () => {
  if (document.body.clientWidth <= breakpoint_3) {
    box_2.style.display = 'none';
    box_7.style.display = 'none';

    instBoxes.forEach((element) => {
      element.style.width = '100%';
      element.style.paddingBottom = '110%';
    });
  } else {
    box_2.style.display = 'block';
    box_7.style.display = 'block';
  }
});
