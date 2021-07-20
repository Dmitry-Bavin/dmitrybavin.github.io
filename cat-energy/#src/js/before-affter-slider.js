const slider = document.querySelector('.slider__images');
const before = document.querySelector('.slider__before');
const sliderButton = document.querySelectorAll('.slider__btn');
const rangeSlider = document.getElementById("myRange");
const mobileWidth = window.matchMedia('(max-width: 767px)');
const body = document.body;

rangeSlider.oninput = function () {
  before.style.width = `${100 - this.value}%`;
}



for (let i = 0; i < sliderButton.length; i++) {
  let sliderButtons = sliderButton[i];
  sliderButtons.addEventListener("click", function (e) {
    if (this.classList.contains('slider__before-btn')) {
      rangeSlider.setAttribute('value', '0');
      before.style.width = `${100}%`;

      if (rangeSlider.classList.contains('_affter-active')) {
        rangeSlider.classList.remove('_affter-active');
      }
    } else {
      rangeSlider.setAttribute('value', '100');
      before.style.width = `${0}%`;

      rangeSlider.classList.add('_affter-active');
    }
  });
}


if (mobileWidth.matches == true) {
  before.style.width = `${100}%`;
  rangeSlider.addEventListener("click", function (e) {
    rangeSlider.classList.toggle('_affter-active');

    if (rangeSlider.value == 0) {
      before.style.width = `${0}%`;
      rangeSlider.value = 100;
      console.log(rangeSlider.value);
    } else
      if (rangeSlider.value == 100) {
        console.log(rangeSlider.value == 100);
        before.style.width = `${100}%`;
        rangeSlider.value = 0;
      } else {
        before.style.width = `${100}%`;
        console.log(rangeSlider.value == 100);
      }
  });

}