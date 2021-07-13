const input = document.querySelector('.exchange-rates__input');
const inputs = document.querySelectorAll('.exchange-rates__input');
const select = document.querySelector('.exchange-rates__select');
const calculateBtn = document.querySelector('.exchange-rates__btn');
const convertResult = document.querySelector('.exchange-rates__total');
const currencyName = document.querySelector('.currency-name'); 
const currencyOptons = document.querySelectorAll('.exchange-rates__currency');
let currencyValue;
let rubValue;

// input.onkeypress= function(event){  // 
//   event = event || window.event;
//   if (event.charCode && (event.charCode < 48 || event.charCode > 57))
//    return false;
//  };

let validateForms = function(input, rules, successModal, yaGoal) { //  создаю функцию, которая принимает параметры - селектора с которым работаем, правила для полей формы, которые мы будем валидировать, попап, который может быть запущен, если всё успешно, некоторые данные для яндекс метрики
  new window.JustValidate(input, {                                 //  создаём новый экземпляр класса
    rules: rules,                                                  //  подучаем свойства этого объекта     
    submitHandler: function(form) {                                //  обработчик отправки формы
      let formData = new FormData(form);                           //  создаём экхемпляр объекта formData, который будет принимать данные формы

      let xhr = new XMLHttpRequest();                              //  Формируем запрос для отправки формы

      xhr.onreadystatechange = function() {                        //  Проверяем статус отправки данных с формы
        if (xhr.readyState === 4) {                                //  Успех  
          if (xhr.status === 200) {                                //  Контрольный, страница обработана успешно
            console.log('отправлено');                              
          }
        }
      }

      xhr.open('POST', 'mail.php', true);                           // открываем запрос, передаём метод и обработчик
			xhr.send(formData);                                           // передаём данные 
      
      form.reset()                                                  // чистим форму
    }
  });
}


validateForms('form', {email: {required: true, email: true}}, '.thanks-popup', 'send goal');    //


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
  
  input.oninput = function() { 
    validate(this);                      // Слушаю событие ввода данных в инпут                        
    rubValue = this.value;                           // Записываю в переменную значение введённое в input
    convertСurrency(rubValue, currencyValue);        // Вызываю функцию конвертации и передаю параметры рубля и обменной валюты            
  };

  function validate(inp) {
    inp.value = inp.value.replace(/[^\d\.]/g, '');
}
    

  let convertСurrency = function (rubValue = 0, currencyValue = currencyOptons[0].value) { // Функция принимает параметры рубля и обменной валюты, 
    convertResult.textContent = (rubValue / currencyValue).toFixed(2);                     // делит количество рублей на значением обменного курса выбранной валюты за одну единицу. 
  }
});





