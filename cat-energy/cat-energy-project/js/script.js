"use strict"

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }

} else {
  document.body.classList.add('_pc');
}
const iconMenu = document.querySelector('.header__burger-icon');
const menuBody = document.querySelector('.nav');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}



const menuLinks = document.querySelectorAll('.nav__link[data-goto]');


if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick)
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      console.log(document.querySelector('header').offsetHeight);
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
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
