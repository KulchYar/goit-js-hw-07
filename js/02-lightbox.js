import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery")

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", (event) =>  {
    event.preventDefault();
})


function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join("")
}



    const gallery = new SimpleLightbox(".gallery a", {
        captions: true,
        captionDelay: 250,
        captionsData: "alt",
    }
    )