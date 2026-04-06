import { createElement } from "./support.js";

export function toMeet() {
   const content = document.querySelector('#content');
   

   const mainContainerMeet = createElement("div", "main-cont-meet");
   const textMeet = createElement("div", "text-cont-meet")
   const chapterMeet = createElement("div", "chapter-cont-meet");
   mainContainerMeet.append(chapterMeet, textMeet);


   const chapParaMeet = createElement("p", "text-h2-header");
   chapParaMeet.textContent = "Let us Meet";
   const chapMainMeet = createElement("h2", "text-h2");
   chapMainMeet.textContent = "About us";

   const textPara = createElement("p", "text")
   textPara.innerHTML = `Welcome to AISHOK | KAZAKH CUISINE, a restaurant dedicated to the rich traditions 
   of Kazakh cuisine.For centuries, Kazakh food has been a reflection of the nomadic lifestyle,
   emphasizing hearty meats, fresh dairy, and simple yet flavorful ingredients that bring families
   together.Every dish tells a story of the vast Kazakh steppe, where hospitality and tradition are 
   at the heart of every meal. <br><br>
   Our menu is curated by Aishok, a 37-year-old chef and author, who has devoted her life to preserving 
   and sharing the authentic tastes of Kazakhstan.Drawing inspiration from family recipes passed down 
   through generations, she combines time - honored techniques with a modern touch, ensuring that every 
   bite is both genuine and unforgettable. <br><br>
   At AISHOK | KAZAKH CUISINE, we invite you to experience the warmth, history, and depth of Kazakh culinary
   heritage, carefully crafted under the guidance of Chef Aishok.`;


   chapterMeet.append(chapParaMeet, chapMainMeet);
   textMeet.appendChild(textPara);


   content.appendChild(mainContainerMeet);

}   