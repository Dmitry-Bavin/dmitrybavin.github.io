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

