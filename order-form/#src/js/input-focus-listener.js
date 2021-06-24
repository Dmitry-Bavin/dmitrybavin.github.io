const orderLeftBlock = document.querySelector('.product-presentation');
const getOrderInputs = document.querySelectorAll('.product-form__input');

if (orderLeftBlock) {
  for (let i = 0; i < getOrderInputs.length; i++) {
    let parallelogramShow = getOrderInputs[i];

    parallelogramShow.addEventListener("focus", function () {
      console.log(orderLeftBlock);
      orderLeftBlock.classList.add("js-parallelogram");
    });
  }
}