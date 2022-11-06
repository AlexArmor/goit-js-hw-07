import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryGroup = document.querySelector('.gallery');

function createGallaryMarkup() {
    const markup = galleryItems.map(elem => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${elem.original}">
          <img
            class="gallery__image"
            src="${elem.preview}"
            data-source="${elem.original}"
            alt="Image description"
          />
        </a>
      </div>`
    }).join('');

    galleryGroup.innerHTML = markup;
}

createGallaryMarkup();

galleryGroup.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const selectedIMG = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${selectedIMG}">
    `)

    instance.show()

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            instance.close()
        }
    });
}