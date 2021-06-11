ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938429885190054, 30.32991749740603],
            zoom: [16],
            controls: []
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl');

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.93866675783276,30.32307250000002], {
            hintContent: 'г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/ice-pointer-in-map.svg',
            // Размеры метки.
            iconImageSize: [80, 140],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-38, -125]
        });

    myMap.geoObjects
        .add(myPlacemark);
});