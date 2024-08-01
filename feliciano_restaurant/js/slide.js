// ? calling elements

const cardsReview = document.querySelectorAll('.card_review');

const btnsSlide = document.querySelectorAll('.btn_slider');

const cardsReviewArr = Array.from(cardsReview);
const btnsSlideArr = Array.from(btnsSlide);

btnsSlideArr.forEach((btns, btnIndex) => {
  btns.addEventListener('click', () => {
    //todo:change the active state
    for (const btns of btnsSlideArr) {
      btns.classList.toggle('btn_slider-active');
    }

    //effect the position of the cards
    cardsReview.forEach((card, cardIndex) => {
      if (cardIndex === btnIndex) {
        card.classList.add('card_review-active');
      } else {
        card.classList.remove('card_review-active');
      }
    });
  });
});
