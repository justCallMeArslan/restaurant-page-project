import { createElement } from "./support";

export function toDine() {
    const content = document.querySelector('#content');
    const mainContainerDine = createElement("div", "main-cont-dine");
    const mainText = createElement("div", "main-dine");
    const bgContainer = document.createElement('div');
    bgContainer.classList.add('bg-img-dine');

    mainText.innerHTML = `
    A refined culinary journey inspired by the traditions of the Kazakh steppe.<br>
    <i>Steppe Tasting Journey — €150 per guest:</i><br>
  

    <b>Main Expressions</b>
    Beshbarmak — tender, slow-simmered meat served with delicate noodles sheets<br>
    Kuirdak — richly spiced meat with deeply caramelized onions<br>
    Manti — soft, delicately steamed dumplings filled with seasoned meat<br><br>

    <b>Dairy Traditions</b>
    Kumis — lightly effervescent, subtly tart fermented mare's milk<br>
    Kurt — bold, intensely savory dried curd<br>
    Baursak — warm, golden, airy fried dough<br><br>

    <b>Final Notes</b>
    Balkaymak — silky, honey-infused cream<br>
    Zhent — nutty, gently sweet millet dessert<br>
    Kazakh shay — robust, milk-infused black tea <br><br>
    
    
    All dishes are prepared in accordance with certified Halal standards. <br>
    Please advise us of any dietary restrictions or allergies at the time of reservation. `;



    mainContainerDine.appendChild(mainText);
    content.append(bgContainer, mainContainerDine);
}
