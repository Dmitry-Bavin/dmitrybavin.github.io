const modalShowButtons = document.querySelectorAll('.btn--active');
// const sendBtn = document.querySelectorAll('.form__send-btn');
const modalHidden = document.querySelector('.modal-hidden');
const modalOverlay = document.querySelector('.modal-overlay');
const burgerBtn = document.querySelector('.burger');

if (modalShowButtons) {
  modalShowButtons.forEach(modalShowButton => {
    console.log(modalShowButton);

    modalShowButton.addEventListener("click", function (e) {
      e.preventDefault();
      modalHidden.classList.add('modal-show');
      modalOverlay.classList.add('modal-show');

      if (modalOverlay.classList.contains('modal-show')) {
        modalOverlay.addEventListener("click", function () {
          modalHidden.classList.remove('modal-show');
          modalOverlay.classList.remove('modal-show');
        });

        // sendBtn.addEventListener("click", function (e) {
        //   e.preventDefault();
        //   modalHidden.classList.remove('modal-show');
        //   modalOverlay.classList.remove('modal-show');
        // });
      }
    });
  });

}

if (burgerBtn) {
  burgerBtn.addEventListener("click", function (e) {
    const mainHeader = document.querySelector('.main-header');

    burgerBtn.classList.toggle('modal-show');
    mainHeader.classList.toggle('modal-show');
  });

}