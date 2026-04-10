import { createElement } from "./support";

export function toDine() {
    const content = document.querySelector('#content');
    const mainContainerDine = createElement("div", "main-cont");
    const mainText = createElement("div", "main-dine");
    const bgContainer = document.createElement('div');
    bgContainer.classList.add('bgImgDineVisit');

    mainText.innerHTML = `
    <span class="highlight">AISHOK | KAZAKH CUISINE</span><br>
    A refined culinary journey inspired by the traditions of the Kazakh steppe.<br>
    All dishes are prepared in accordance with certified Halal standards.
    <br><br>

    <i>Steppe Tasting Journey — €150 per guest</i><br><br>

    <b>Main Expressions</b><br>
    Beshbarmak — <i>tender, slow-simmered</i> meat served with delicate noodles sheets<br>
    Kuirdak — <i>richly spiced</i> meat with deeply caramelized onions<br>
    Manti — <i>soft, delicately steamed</i> dumplings filled with seasoned meat<br><br>

    <b>Dairy Traditions</b><br>
    Kumis — <i>lightly effervescent, subtly tart</i> fermented mare's milk<br>
    Kurt — <i>bold, intensely savory</i> dried curd<br>
    Baursak — <i>warm, golden, airy</i> fried dough<br><br>

    <b>Final Notes</b><br>
    Balkaymak — <i>silky, honey-infused</i> cream<br>
    Zhent — <i>nutty, gently sweet</i> millet dessert<br>
    Syutpen shay — <i>robust, milk-infused</i> black tea`;

    mainContainerDine.appendChild(mainText);
    content.append(bgContainer, mainContainerDine);
}
