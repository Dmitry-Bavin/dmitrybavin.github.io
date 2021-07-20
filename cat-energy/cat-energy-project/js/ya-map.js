ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: [18],
    controls: []
  });
  myMap.behaviors.disable('scrollZoom');
  myMap.controls.add('zoomControl');

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: './img/map/pin/map-pin.png',
      // Размеры метки.
      iconImageSize: [114, 106],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-38, -125]
    });

  myMap.geoObjects
    .add(myPlacemark);
});