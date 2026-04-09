import { createElement } from "./support";

export function menu() {
    const content = document.querySelector('#content');
    const mainContainerMenu = createElement("div", "main-cont");



    content.appendChild(mainContainerMenu);    
}