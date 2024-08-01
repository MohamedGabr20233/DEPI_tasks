// calling elements
const sectionHeroBg = document.getElementById('hero_background-image');

const labelHero = document.querySelector('.hero_text-title');

const btnHeroLeft = document.querySelector('.btn_hero-left');
const btnHeroRight = document.querySelector('.btn_hero-right');

// global map
let HeroCounter = 0;

const bgMap = new Map([
  [1, ['pics/hero_Section/bg_1.jpg', 'best restaurant']],
  [2, ['https://raw.githubusercontent.com/MohamedGabr20233/DEPI_tasks/main/feliciano_restaurant/pics/hero_Section/bg_2.jpg', 'Nutritious & Tasty']],
  [3, ['https://raw.githubusercontent.com/MohamedGabr20233/DEPI_tasks/main/feliciano_restaurant/pics/hero_Section/bg_3.jpg', 'Delicious Specialties']],
]);

const heroTransform = function () {
  //todo add an 1 integer to the counter for the loop
  HeroCounter++;

  //todo reset the number of the section counter
  if (HeroCounter == 4) HeroCounter = 1;
  //todo add the fade in out animation

  // first fade in
  sectionHeroBg.classList.add('hero_fade-in');
  labelHero.classList.add('hero_fade-in');

  //todo change the value of the bg and the title
  sectionHeroBg.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%), url(${bgMap.get(HeroCounter)[0]})`;
  labelHero.innerHTML = `${bgMap.get(HeroCounter)[1]}`;

  setTimeout(() => {
    // add the fade out animation
    sectionHeroBg.classList.add('hero_fade-out');
    labelHero.classList.add('hero_fade-out');
    //   remove the fade in animation
    sectionHeroBg.classList.remove('hero_fade-in');
    labelHero.classList.remove('hero_fade-in');
  }, 5500);

  sectionHeroBg.classList.remove('hero_fade-out');
  labelHero.classList.remove('hero_fade-out');
};

heroTransform();

const bgChanger = setInterval(heroTransform, 6000);

btnHeroLeft.addEventListener('click', () => {
  HeroCounter++;
  if (HeroCounter == 4) HeroCounter = 1;

  sectionHeroBg.classList.remove('hero_fade-in');
  labelHero.classList.remove('hero_fade-in');

  setTimeout(() => {
    // first fade in
    sectionHeroBg.classList.add('hero_fade-in');
    labelHero.classList.add('hero_fade-in');
  }, 10);

  //todo change the value of the bg and the title
  sectionHeroBg.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%), url(${bgMap.get(HeroCounter)[0]})`;
  labelHero.innerHTML = `${bgMap.get(HeroCounter)[1]}`;

  sectionHeroBg.classList.remove('hero_fade-out');
  labelHero.classList.remove('hero_fade-out');
});

btnHeroRight.addEventListener('click', () => {
  HeroCounter--;
  if (HeroCounter == 0) HeroCounter = 3;

  sectionHeroBg.classList.remove('hero_fade-in');
  labelHero.classList.remove('hero_fade-in');

  setTimeout(() => {
    // first fade in
    sectionHeroBg.classList.add('hero_fade-in');
    labelHero.classList.add('hero_fade-in');
  }, 10);

  //todo change the value of the bg and the title
  sectionHeroBg.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.7) 50%), url(${bgMap.get(HeroCounter)[0]})`;
  labelHero.innerHTML = `${bgMap.get(HeroCounter)[1]}`;

  sectionHeroBg.classList.remove('hero_fade-out');
  labelHero.classList.remove('hero_fade-out');
});

//===========================================================================================================
//? the food menu
//* calling elements

// const sectionHero = document.getElementById('hero_section');
// let menuCounter = 0;
// const menuHero = ` `;




