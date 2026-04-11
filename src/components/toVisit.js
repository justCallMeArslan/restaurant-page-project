import { createElement } from "./support.js";
import imgLink from "../assets/location.png"

export function toVisit() {
    const content = document.querySelector('#content');
    const mainContainerVisit = createElement("div", "main-cont");
    const textVisit = createElement("div", "text-cont");
    const chapterVisit = createElement("div", "chapter-cont");
    const bgContainer = document.createElement('div');
    bgContainer.classList.add('bg-img-visit');

    mainContainerVisit.append(chapterVisit, textVisit);

    const chapParaVisit = createElement("p", "text-h2-header");
    chapParaVisit.textContent = "Let's Visit";
    const chapMainVisit = createElement("h2", "text-h2");
    chapMainVisit.textContent = "Destination";


    const mapLink = document.createElement('img');
    mapLink.src = imgLink;
    mapLink.style.cursor = "pointer";
    mapLink.title = "Click to view on Google Maps";
    mapLink.addEventListener('click', () => {
        window.open("https://maps.app.goo.gl/ttvpc5hBb7ieWWWL6", "_blank");
    })
    const mapLinkCaption = document.createElement("span");
    mapLinkCaption.innerHTML = `Address: Staroměstské nám. 609/9, 110 00 Staré 
    Město, Czechia <br> Phone: +420 123 454 321 <br> Email: aishok.cuisine@business.com`;

    textVisit.append(mapLink, mapLinkCaption);
    chapterVisit.append(chapParaVisit, chapMainVisit);
    content.append(bgContainer, mainContainerVisit);
}