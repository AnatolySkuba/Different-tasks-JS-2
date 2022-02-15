// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описан в документации
import SimpleLightbox from "../../node_modules/simplelightbox";
// Дополнительный импорт стилей
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

function renderList(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
  `).join('');
  
  galleryEl.insertAdjacentHTML('afterbegin', markup);
};

renderList(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });