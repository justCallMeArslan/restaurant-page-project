import { createElement } from "./support";

export function reserve() {
    const content = document.querySelector('#content');

    const mainContainerCont = createElement("div", "main-cont");
    const formCont = createElement("div", "form-container");
    const chapterCont = createElement("div", "chapter-cont");
    mainContainerCont.append(chapterCont, formCont);

    const chapParaCont = createElement("p", "text-h2-header");
    chapParaCont.textContent = "Let's Book";
    const chapMainCont = createElement("h2", "text-h2");
    chapMainCont.textContent = "Reservation";

    const form = createElement("form", "form-contact");
    form.id = "contactForm";
    form.addEventListener("submit", (e) => {
        e.preventDefault(); //stops submit behavior
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "noopener, noreferrer");

        nameInput.value = "";
        emailInput.value = "";
        selector.selectedIndex = 0;
        message.value = "";
        alert("Oooooopsies, I'm reaallyyy reaallyyy sooooorry!! *smirking*");
    });

    const nameLabel = createElement("label");
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Name"
    const nameInput = createElement("input", "form-reserv");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.autocomplete = "name"
    nameInput.required = true;

    const emailLabel = createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email"
    const emailInput = createElement("input", "form-reserv");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.autocomplete = "email";
    emailInput.required = true;

    const selectorLabel = createElement("label");
    selectorLabel.htmlFor = "reservation"; // used for screen readers and crawlers
    selectorLabel.textContent = "Nature of reservation";
    const selector = createElement("select", "form-reserv");
    selector.id = "reservation"; // connects label and selector
    selector.name = "reservation";
    selector.required = true;

    const selectorPlaceHolder = createElement("option", "form-reserv");
    selectorPlaceHolder.textContent = "Please, select an option:";
    selectorPlaceHolder.disabled = true;
    selectorPlaceHolder.selected = true;
    selector.appendChild(selectorPlaceHolder);


    const options = [
        { text: "Table reservation", value: "table" },
        { text: "Private dining / venue hire", value: "private" },
        { text: "Long-term reservation", value: "long-term" },
        { text: "Special request / Special occasion", value: "special" },

    ]

    options.forEach(opt => {
        const option = createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        selector.appendChild(option);
    });

    const message = createElement('textarea', "form-reserv");
    message.id = "message";
    message.name = "message";
    message.maxLength = 250;
    message.rows = 5;
    message.placeholder = "Share your reservation details here...";
    message.setAttribute("aria-label", "Share your reservation details");

    const messageBtn = createElement("button", "submitBtn");
    messageBtn.textContent = "To share";
    messageBtn.type = "submit";

    form.append(nameLabel, nameInput, emailLabel, emailInput, selectorLabel, selector, message, messageBtn);
    formCont.appendChild(form);
    chapterCont.append(chapParaCont, chapMainCont);
    content.appendChild(mainContainerCont);
}