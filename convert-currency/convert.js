const input = document.querySelector('.exchange-rates__input');
const inputs = document.querySelectorAll('.exchange-rates__input');
const select = document.querySelector('.exchange-rates__select');
const calculateBtn = document.querySelector('.exchange-rates__btn');
const convertResult = document.querySelector('.exchange-rates__total');
const currencyName = document.querySelector('.currency-name'); 
const currencyOptons = document.querySelectorAll('.exchange-rates__currency');
let currencyValue;
let rubValue;

input.onkeypress= function(event){
  event= event || window.event;
  if (event.charCode && (event.charCode < 48 || event.charCode > 57))
   return false;
 };

let validateForms = function(inputs, rules, successModal, yaGoal) {
  new window.JustValidate(inputs, {
    rules: rules,
    submitHandler: function(form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest(); 

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('отправлено'); 
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

      form.reset()
    }
  });
}


validateForms('form', {email: {required: true, email: true}}, '.thanks-popup', 'send goal');

// function parseXML() {
//     var doc = new ActiveXObject(‘Microsoft.XMLDOM’);
//     doc.loadXML(str);
//     return doc;
//   }

// fetch('https://www.cbr-xml-daily.ru/daily_json.js')
// .then(response => response.text())
// .then(data => {
//   const parser = new DOMParser();
//   const pageDOM = parser.parseFromString(data, "text/html");
//   const tableData = pageDOM.querySelector('.data');
  
// //   // Для примера	
//   const dataElement = document.getElementById('data');
//   dataElement.innerHTML = tableData;

//   console.log(tableData)
// });
  

// console.log(rubValue.oninput);

// document.addEventListener("DOMContentLoaded", function() {
//   Array.from(currencyOptons).forEach(currencyOpton => {
//     currencyOpton.onclick = function() {
//       alert(document.getElementById("currency").value);
//     };
//   })
// });


// document.addEventListener("DOMContentLoaded", function() {
//   calculateBtn.onclick = function() {
//     selectValue.value;
//   };
// });

// for (let i = 0; i < currencyOptons.length; i++) {
//   var currencyOpton = currencyOptons[i];
  
// }

document.addEventListener('DOMContentLoaded', () => { // проверянм, что DOM дерево было загружено
  select.addEventListener('change', function() {      // Слушаем событие change, на select
    currencyValue = this.value;                       // Записываем значение select.value из выбранного optons
    convertСurrency(rubValue, currencyValue);         // Вызываю функцию конвертации и передаю параметры рубля и обменной валюты
    currencyName.textContent = " " + this.options[this.selectedIndex].text;  // перезаписываю текстовую ноду резултата, в соотвествии с выбранным валютой                                                           
  })

  input.addEventListener("click", function(e) {
    if(this.value == 0) {
      this.value = this.value.replace(0, '');
    }
  });
  
  input.oninput = function() {                       // Слушаю событие ввода данных в инпут                        
    rubValue = this.value;                           // Записываю в переменную значение введённое в input
    convertСurrency(rubValue, currencyValue);        // Вызываю функцию конвертации и передаю параметры рубля и обменной валюты 
    // rubValue = rubValue.replace(/[^0-9\.]/gi, '');
              
  };
    

  let convertСurrency = function (rubValue = 0, currencyValue = currencyOptons[0].value) { // Функция принимает параметры рубля и обменной валюты, 
    convertResult.textContent = (rubValue / currencyValue).toFixed(2);                                  // делит количество рублей на значением обменного курса выбранной валюты за одну единицу. 
  }
});





