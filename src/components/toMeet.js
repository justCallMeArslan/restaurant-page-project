import { createElement } from "./support.js";

export function toMeet() {
   const content = document.querySelector('#content');
   const mainContainerMeet = createElement("div", "main-cont");
   const textMeet = createElement("div", "text-cont")
   const chapterMeet = createElement("div", "chapter-cont");
   mainContainerMeet.append(chapterMeet, textMeet);

   const chapParaMeet = createElement("p", "text-h2-header");
   chapParaMeet.textContent = "Let's Meet";
   const chapMainMeet = createElement("h2", "text-h2");
   chapMainMeet.textContent = "Heritage";

   const textPara = createElement("p", "text")
   textPara.innerHTML = `
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


   chapterMeet.append(chapParaMeet, chapMainMeet);
   textMeet.appendChild(textPara);


   content.appendChild(mainContainerMeet);

}   