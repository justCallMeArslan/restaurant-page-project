import { createElement } from "./support";

export function footer() {
    const content = document.querySelector('#content');

    const footer = createElement("footer");
    const footerCont = createElement("div");
    footer.appendChild(footerCont);



    const devBy = createElement("p");
    devBy.innerHTML = `Developed by: <a href="https://github.com/justCallMeArslan">ArS</a>`
    const rights = createElement("p");
    rights.textContent = "@Copyright 2026. All rights reserved."
    const imgArt = createElement("p");
    imgArt.innerHTML = ` Photo by <a href="https://unsplash.com/@mike_cho?utm_source
    =unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Cho</a> on <a href
    ="https://unsplash.com/photos/a-table-with-a-vase-of-flowers-on-top-of-it-
    nqA1WVpEF3s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    >Unsplash</a> `



    footerCont.append(devBy, rights, imgArt);
    content.appendChild(footer);
}