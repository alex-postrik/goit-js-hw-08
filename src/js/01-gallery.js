import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('div.gallery');
const marcupCard = createGallaryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', marcupCard);

function createGallaryMarkup(image) {
  return image
    .map(({ preview, original, description }) => {
      return `
       <li><a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}"/>
       </a></li>
        `;
    })
    .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
