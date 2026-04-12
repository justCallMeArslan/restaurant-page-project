import { createElement } from "./support";

export function footer() {
    const content = document.querySelector('#content');

    const footer = createElement("footer");
    const footerCont = createElement("div", "footer-cont");
    footer.appendChild(footerCont);

    const devBy = createElement("p");
    devBy.innerHTML = `Developed by: <a href="https://github.com/justCallMeArslan">ArS</a>`
    const rights = createElement("p");
    rights.textContent = "@Copyright 2026. All rights reserved"
    const imgArt = createElement("p");
    imgArt.innerHTML = ` Photos by <a href="https://unsplash.com/@mike_cho?utm_source
    =unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Cho</a>, <a href="https://unsplash.com/@haungynphuc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nguyen Phuc Hau</a> and <a href="https://unsplash.com/@espenbi?utm_source=unsplash&utm_medium
    =referral&utm_content=creditCopyText">Espen Bierud</a> on <a href="https://unsplash.com/">Unsplash</a>`

    footerCont.append(devBy, imgArt,rights);
    content.appendChild(footer);
}

