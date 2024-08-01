//? calling the elements

const countYears = document.getElementById('counter_box-years');
const countDishes = document.getElementById('counter_box-dishes');
const countStaff = document.getElementById('counter_box-staff');
const countCustomer = document.getElementById('counter_box-customer');


const SecCounter = document.querySelector('.counter_section');

let runtime = false;
const counterAnimation = function (el) {
  let startValue = 0;
  let endValue = el.getAttribute('data-value');

  let duration = 3000 / endValue;

  let counter = setInterval(function () {
    if (endValue == 15000) {
      startValue += 20;
    } else {
      startValue += 1;
    }
    el.textContent = startValue;

    if (startValue >= endValue) {
      if (startValue == 15000) {
        el.textContent = '15,000';
      } else {
        el.textContent = endValue;
      }
      clearInterval(counter);
    }
  }, duration);
};

window.addEventListener('scroll', () => {
  if (window.screenY + window.innerHeight >= SecCounter.getBoundingClientRect().bottom && !runtime) {
    counterAnimation(countYears);
    counterAnimation(countDishes);
    counterAnimation(countStaff);
    counterAnimation(countCustomer);

    runtime = true;
  }
});
window.addEventListener('load', () => {
  if (window.screenY + window.innerHeight >= SecCounter.getBoundingClientRect().top && !runtime) {
    counterAnimation(countYears);
    counterAnimation(countDishes);
    counterAnimation(countStaff);
    counterAnimation(countCustomer);

    runtime = true;
  }
});
