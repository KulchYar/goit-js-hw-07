import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery")

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
    </li>
    `).join("")
}

function handleClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return
    }
    const largeImage = event.target.dataset.source;
    const imageDescription = event.target.alt

    const instance = basicLightbox.create(`
    <div class="modal">
       <img src="${largeImage}" alt="${imageDescription}"
    </div>
`)

instance.show()
}