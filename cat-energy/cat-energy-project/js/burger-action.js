const iconMenu = document.querySelector('.header__burger-icon');
const menuBody = document.querySelector('.nav');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


