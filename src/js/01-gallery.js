
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryImage = document.querySelector(".gallery");

function addGallery(galleryItems) {
  const markup = galleryItems.map(img =>
`<a class="gallery__item" href="${img.original}">
<img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`).join('');
  galleryImage.innerHTML = markup
};
addGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
