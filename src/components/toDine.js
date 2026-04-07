import { createElement } from "./support.js";

export function toDine() {
    const content = document.querySelector('#content');
    const mainContainerDine = createElement("div", "main-cont");
    const textDine = createElement("div", "text-cont")
    const chapterDine = createElement("div", "chapter-cont");
    mainContainerDine.append(chapterDine, textDine);


    const chapParaDine = createElement("p", "text-h2-header");
    chapParaDine.textContent = "Let's Choose";
    const chapMainDine = createElement("h2", "text-h2");
    chapMainDine.textContent = "About menu";

    const textPara = createElement("p", "text");
    textPara.innerHTML = `At AISHOK | KAZAKH CUISINE, we invite you to immerse yourself 
    in a refined culinary journey that celebrates the rich heritage of Kazakhstan. <br>
    Begin with the hearty elegance of our main dishes — <i>succulent</i> Beshbarmak, 
    <i>aromatically spiced</i> Kuirdak, and <i>delicately steamed</i> Manti, each 
    prepared using centuries-old techniques that honor the traditions of the nomadic steppe. <br>
    Savor the distinctive flavors of our traditional dairy offerings, from the 
    <i>subtly tart</i> Kumis and <i>crumbly, intensely flavored</i> Kurt to the 
    <i>golden, airy</i> Baursak, perfect companions to every dish. <br>
    Conclude with the indulgence of our desserts — <i>rich, velvety</i> Balkaymak and 
    <i>artisanal, gently spiced</i> Zhent — served alongside <i>bold, exquisitely 
    brewed</i> Kazakh Tea, a ceremonious finale that captures the warmth, sophistication, 
    and depth of Kazakh hospitality.`;


    chapterDine.append(chapParaDine, chapMainDine);
    textDine.appendChild(textPara);


    content.appendChild(mainContainerDine);

}   
