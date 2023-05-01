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
  <img
    class="gallery__image"
    src= "${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;

const markupGallery = galleryItems
  .map((item) => makeGalleryImages(item))
  .join("");

gallery.insertAdjacentHTML("beforeend", markupGallery);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${imageUrl}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", instance);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", instance);
      },
    }
  );
  instance.show();

  if (instance.visible()) {
    document.addEventListener("keydown", (event) => {
      if (event.code !== "Escape") return;
      instance.close();
    });
  }
});
