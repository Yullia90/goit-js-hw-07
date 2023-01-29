import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsGallery = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsGallery);
galleryContainer.addEventListener("click", onClick);
galleryContainer.addEventListener("click", onGalleryContainer);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt= "${description}"
    />  
  </a>
</div>
`;
    })
    .join("");
}

function onClick(event) {
  event.preventDefault();
}

function onGalleryContainer(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const fullScreenImg = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  fullScreenImg.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      fullScreenImg.close();
    }
  });
}
console.log(galleryItems);
