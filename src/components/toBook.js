import { createElement } from "./support.js";
import imgLink from "../assets/location.png"

export function toBook() {
    const content = document.querySelector('#content');
    const mainContainerBook = createElement("div", "main-cont");
    const textBook = createElement("div", "text-cont");
    const chapterBook = createElement("div", "chapter-cont");
    mainContainerBook.append(chapterBook, textBook);

    const chapParaBook = createElement("p", "text-h2-header");
    chapParaBook.textContent = "Let's Book";
    const chapMainBook = createElement("h2", "text-h2");
    chapMainBook.textContent = "Reservation";

    const textPara = createElement("p", "text");
    textPara.textContent = "Our location is:"
    const mapLink = document.createElement('img');
    mapLink.src = imgLink;
    mapLink.style.cursor = "pointer";
    mapLink.title = "Click to view on Google Maps";
    mapLink.addEventListener('click', ()=> {
        window.open("https://maps.app.goo.gl/ttvpc5hBb7ieWWWL6", "_blank");
    })
    const mapLinkCaption = document.createElement("span");
    mapLinkCaption.textContent = "Staroměstské nám. 609/9, 110 00 Staré Město, Czechia";


    textBook.append(textPara, mapLink, mapLinkCaption);
    chapterBook.append(chapParaBook, chapMainBook);
    content.appendChild(mainContainerBook);
}