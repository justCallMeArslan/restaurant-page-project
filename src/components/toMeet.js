import { createElement } from "./support.js";

export function toMeet() {
   const content = document.querySelector('#content');

   const imgContainer = document.createElement('div');
   imgContainer.classList.add('bg-img-meet');

   const mainContainerHeri = createElement("div", "main-cont");
   const mainContainerJour = createElement("div", "main-cont");
   const textHeri = createElement("div", "text-cont")
   const chapterHeri = createElement("div", "chapter-cont");
   const textJour = createElement("div", "text-cont")
   const chapterJour = createElement("div", "chapter-cont");
   mainContainerHeri.append(chapterHeri, textHeri);
   mainContainerJour.append(chapterJour, textJour);

   const chapParaHeri = createElement("p", "text-h2-header");
   chapParaHeri.textContent = "Let's Meet";
   const chapMainHeri = createElement("h2", "text-h2");
   chapMainHeri.textContent = "Heritage";
   const textParaHeri = createElement("p", "text")
   textParaHeri.innerHTML = `
   Welcome to <span class = "highlight">AISHOK | KAZAKH CUISINE</span>, a restaurant 
   dedicated to the <i>rich traditions</i> of Kazakh cuisine - <b>Est. 1969</b>.
   <br><br> For centuries, Kazakh food has reflected the <i>nomadic 
   lifestyle</i>, emphasizing <i>hearty meats</i>, <i>fresh dairy</i>, and simple yet 
   <i>flavorful ingredients</i> that bring families together. Every dish tells a story 
   of the vast <i>Kazakh steppe</i>, where <i>hospitality</i> and <i>tradition</i> 
   lie at the heart of every meal.<br><br>
   Our menu is masterfully curated by Aishok, a 37-year-old chef and author 
   devoted to safeguarding and celebrating <i>Kazakhstan's authentic flavors</i>. 
   Drawing inspiration from treasured family recipes passed down through generations, 
   she combines meticulous, <i>centuries-old techniques</i> with a modern sensibility, 
   ensuring every dish is both <i>genuine</i> and <i>unforgettable</i>.`;

   const chapParaJour = createElement("p", "text-h2-header");
   chapParaJour.textContent = "Let's Choose";
   const chapMainJour = createElement("h2", "text-h2");
   chapMainJour.textContent = "Journey";
   const textParaJour = createElement("p", "text");
   textParaJour.innerHTML = `At <span class="highlight">AISHOK | KAZAKH CUISINE</span>, 
    we invite you to immerse yourself in a refined culinary journey that celebrates the 
    rich heritage of Kazakhstan. <br><br> Begin with the hearty elegance of our main dishes — 
    <i>succulent</i> Beshbarmak, <i>aromatically spiced</i> Kuirdak, and <i>delicately steamed</i> 
    Manti, each prepared using centuries-old techniques that honor the traditions 
    of the nomadic steppe. <br><br> Savor the distinctive flavors of our traditional 
    dairy offerings, from the <i>subtly tart</i> Kumis and <i>crumbly, intensely 
    flavored</i> Kurt to the <i>golden, airy</i> Baursak, perfect companions to every dish. <br><br>
    Conclude with the indulgence of our desserts — <i>rich, velvety</i> Balkaymak and 
    <i>artisanal, gently spiced</i> Zhent — served alongside <i>bold, exquisitely 
    brewed</i> Kazakh Tea, a ceremonious finale that captures the warmth, sophistication, 
    and depth of Kazakh hospitality.`;

   chapterHeri.append(chapParaHeri, chapMainHeri);
   textHeri.appendChild(textParaHeri);
   chapterJour.append(chapParaJour, chapMainJour);
   textJour.append(textParaJour);

   content.append(imgContainer, mainContainerHeri, mainContainerJour);

}

