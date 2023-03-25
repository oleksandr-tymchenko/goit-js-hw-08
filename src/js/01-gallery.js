// import '/src/css/01-gallery.css';
// import '/src/css/common.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '/src/css/01-gallery.css';
import '/src/css/common.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galaryList = document.querySelector('ul.gallery');

const galaryListItems = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
    </li>`
}).join('');

galaryList.innerHTML = galaryListItems;


const galary = new SimpleLightbox('ul.gallery a', {captionDelay: 250, captionsData: 'alt'});

console.log(galleryItems);
