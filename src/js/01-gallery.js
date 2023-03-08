import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryContainer = document.querySelector('div.gallery');
const marcupCard = createGalleryCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', marcupCard);

function createGalleryCard(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
      <ul>
       <li><a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}"/>
       </a></li>
        </ul>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
