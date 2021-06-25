const rangeSlider = document.getElementById('range-slider');
// const priceRangOutput = document.querySelectorAll('price-range__price');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [100, 500],
    connect: true,
    step: 5,
    range: {
      'min': [0],
      'max': [750]
    }
  });
}

const lowerCost = document.getElementById('lower-cost');
const upperCost = document.getElementById('upper-cost');
const priceRangOutput = [lowerCost, upperCost];

rangeSlider.noUiSlider.on('update', function (values, handle) {
  priceRangOutput[handle].value = Math.round(values[handle]);
});

