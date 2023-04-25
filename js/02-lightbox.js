import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const makeGalleryImages = ({
  preview,
  original,
  description,
}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;

const markupGallery = galleryItems
  .map((item) => makeGalleryImages(item))
  .join("");

gallery.insertAdjacentHTML("beforeend", markupGallery);

const galleryLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
