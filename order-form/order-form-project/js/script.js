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
(function (e) { e.fn.ddslick = function (l) { if (c[l]) { return c[l].apply(this, Array.prototype.slice.call(arguments, 1)) } else { if (typeof l === "object" || !l) { return c.init.apply(this, arguments) } else { e.error("Method " + l + " does not exists.") } } }; var c = {}, d = { data: [], keepJSONItemsOnTop: false, width: 260, height: null, background: "#eee", selectText: "", defaultSelectedIndex: null, truncateDescription: true, imagePosition: "left", showSelectedHTML: true, clickOffToClose: true, embedCSS: true, onSelected: function () { } }, i = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>', a = '<ul class="dd-options"></ul>', b = '<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}​ .dd-selected-text { font-weight:bold}​</style>'; c.init = function (l) { var l = e.extend({}, d, l); if (e("#css-ddslick").length <= 0 && l.embedCSS) { e(b).appendTo("head") } return this.each(function () { var p = e(this), q = p.data("ddslick"); if (!q) { var n = [], o = l.data; p.find("option").each(function () { var w = e(this), v = w.data(); n.push({ text: e.trim(w.text()), value: w.val(), selected: w.is(":selected"), description: v.description, imageSrc: v.imagesrc }) }); if (l.keepJSONItemsOnTop) { e.merge(l.data, n) } else { l.data = e.merge(n, l.data) } var m = p, s = e('<div id="' + p.attr("id") + '"></div>'); p.replaceWith(s); p = s; p.addClass("dd-container").append(i).append(a); var n = p.find(".dd-select"), u = p.find(".dd-options"); u.css({ width: l.width }); n.css({ width: l.width, background: l.background }); p.css({ width: l.width }); if (l.height != null) { u.css({ height: l.height, overflow: "auto" }) } e.each(l.data, function (v, w) { if (w.selected) { l.defaultSelectedIndex = v } u.append('<li><a class="dd-option">' + (w.value ? ' <input class="dd-option-value" type="hidden" value="' + w.value + '" />' : "") + (w.imageSrc ? ' <img class="dd-option-image' + (l.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + w.imageSrc + '" />' : "") + (w.text ? ' <label class="dd-option-text">' + w.text + "</label>" : "") + (w.description ? ' <small class="dd-option-description dd-desc">' + w.description + "</small>" : "") + "</a></li>") }); var t = { settings: l, original: m, selectedIndex: -1, selectedItem: null, selectedData: null }; p.data("ddslick", t); if (l.selectText.length > 0 && l.defaultSelectedIndex == null) { p.find(".dd-selected").html(l.selectText) } else { var r = (l.defaultSelectedIndex != null && l.defaultSelectedIndex >= 0 && l.defaultSelectedIndex < l.data.length) ? l.defaultSelectedIndex : 0; j(p, r) } p.find(".dd-select").on("click.ddslick", function () { f(p) }); p.find(".dd-option").on("click.ddslick", function () { j(p, e(this).closest("li").index()) }); if (l.clickOffToClose) { u.addClass("dd-click-off-close"); p.on("click.ddslick", function (v) { v.stopPropagation() }); e("body").on("click", function () { e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up") }) } } }) }; c.select = function (l) { return this.each(function () { if (l.index !== undefined) { j(e(this), l.index) } }) }; c.open = function () { return this.each(function () { var m = e(this), l = m.data("ddslick"); if (l) { f(m) } }) }; c.close = function () { return this.each(function () { var m = e(this), l = m.data("ddslick"); if (l) { k(m) } }) }; c.destroy = function () { return this.each(function () { var n = e(this), m = n.data("ddslick"); if (m) { var l = m.original; n.removeData("ddslick").unbind(".ddslick").replaceWith(l) } }) }; function j(q, s) { var u = q.data("ddslick"); var r = q.find(".dd-selected"), n = r.siblings(".dd-selected-value"), v = q.find(".dd-options"), l = r.siblings(".dd-pointer"), p = q.find(".dd-option").eq(s), m = p.closest("li"), o = u.settings, t = u.settings.data[s]; q.find(".dd-option").removeClass("dd-option-selected"); p.addClass("dd-option-selected"); u.selectedIndex = s; u.selectedItem = m; u.selectedData = t; if (o.showSelectedHTML) { r.html((t.imageSrc ? '<img class="dd-selected-image' + (o.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + t.imageSrc + '" />' : "") + (t.text ? '<label class="dd-selected-text">' + t.text + "</label>" : "") + (t.description ? '<small class="dd-selected-description dd-desc' + (o.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + t.description + "</small>" : "")) } else { r.html(t.text) } n.val(t.value); u.original.val(t.value); q.data("ddslick", u); k(q); g(q); if (typeof o.onSelected == "function") { o.onSelected.call(this, u) } } function f(p) { var o = p.find(".dd-select"), m = o.siblings(".dd-options"), l = o.find(".dd-pointer"), n = m.is(":visible"); e(".dd-click-off-close").not(m).slideUp(50); e(".dd-pointer").removeClass("dd-pointer-up"); if (n) { m.slideUp("fast"); l.removeClass("dd-pointer-up") } else { m.slideDown("fast"); l.addClass("dd-pointer-up") } h(p) } function k(l) { l.find(".dd-options").slideUp(50); l.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up") } function g(o) { var n = o.find(".dd-select").css("height"); var m = o.find(".dd-selected-description"); var l = o.find(".dd-selected-image"); if (m.length <= 0 && l.length > 0) { o.find(".dd-selected-text").css("lineHeight", n) } } function h(l) { l.find(".dd-option").each(function () { var p = e(this); var n = p.css("height"); var o = p.find(".dd-option-description"); var m = l.find(".dd-option-image"); if (o.length <= 0 && m.length > 0) { p.find(".dd-option-text").css("lineHeight", n) } }) } })(jQuery);
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
const galleryItems = document.querySelectorAll('.gallery__slide');
const galleryItemsBig = document.querySelectorAll('.gallery__slide--big');



for (let i = 0; i < galleryItems.length; i++) {
  let galleryItem = galleryItems[i];

  let removeBigItems = function () {
    Array.from(galleryItems).forEach(galleryItem => {
      galleryItem.classList.remove('gallery__slide--big');
    });
  }

  galleryItem.addEventListener("click", function () {
    if (galleryItemsBig) {
      removeBigItems();
      galleryItem.classList.add('gallery__slide--big');

    }

  });
}


// const swiperContainer = document.querySelector('.gallery');
// const myScriptJs = document.querySelector('#last-js');
// const setScriptElement = document.createElement('script');
// const mediaQuery = window.matchMedia('(max-width: 580px)');

// mediaQuery.addListener(loadScripts);

// function loadScripts() {
//   if (mediaQuery.matches == true) {
//     setScriptElement.innerHTML = '';
//     setScriptElement.setAttribute('class', 'addScript');
//     setScriptElement.setAttribute('src', 'js/swiper-bundle.min.js');
//     myScriptJs.insertAdjacentElement('beforeBegin', setScriptElement);
//     Array.from(galleryItems).forEach(galleryItem => {
//       galleryItem.classList.add('swiper-slide');
//       swiperContainer.classList.add('swiper-container', 'mySwiper');
//     })
//   }
//   else if (setScriptElement) {
//     const addScript = document.querySelectorAll('.addScript');
//     addScript[0].remove();
//     Array.from(galleryItems).forEach(galleryItem => {
//       galleryItem.classList.remove('swiper-slide')
//       swiperContainer.classList.remove('swiper-container', 'mySwiper');
//     })
//   }
// }









