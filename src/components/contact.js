import { createElement } from "./support";

export function contact() {
    const content = document.querySelector('#content');

    const mainContainerCont = createElement("div", "main-cont");
    const formCont = createElement("div", "form-container");
    const chapterCont = createElement("div", "chapter-cont");
    mainContainerCont.append(chapterCont, formCont);

    const chapParaCont = createElement("p", "text-h2-header");
    chapParaCont.textContent = "Let's Connect";
    const chapMainCont = createElement("h2", "text-h2");
    chapMainCont.textContent = "Enquiry";

    const form = createElement("form");
    form.id = "contactForm";
    form.method = "POST";
    form.action = "/submit";

    const nameLabel = createElement("label");
    nameLabel.htmlFor = "name";
    nameLabel.textContent = "Name"
    const nameInput = createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;

    const emailLabel = createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Email"
    const emailInput = createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;

    const selectorLabel = createElement("label");
    selectorLabel.htmlFor = "enquiry"; // used for screen readers and crawlers
    selectorLabel.textContent = "Nature of request";
    const selector = createElement("select");
    selector.id = "enquiry"; // connects label and selector
    selector.name = "enquiry";
    selector.required = true;

    const selectorPlaceHolder = createElement("option");
    selectorPlaceHolder.textContent = "Please, select an option:";
    selectorPlaceHolder.disabled = true;
    selectorPlaceHolder.selected = true;
    selector.appendChild(selectorPlaceHolder);


    const options = [
        { text: "Table reservation", value: "table" },
        { text: "Private venue", value: "venue" },
        { text: "General enquiry", value: "general" },
        { text: "Experience sharing", value: "experience" },
        { text: "Cooperation and Media", value: "coop" }
    ]

    options.forEach(opt => {
        const option = createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        selector.appendChild(option);
    });

    const message = createElement('textarea');
    message.id = "message";
    message.name = "message";
    message.maxLength = 200;
    message.rows = 5;
    message.placeholder = "Share your enquiry here...";
    message.setAttribute("aria-label", "Share your request");

    const messageBtn = createElement("button");
    messageBtn.textContent = "To share";
    messageBtn.type = "submit";

    form.append(nameLabel, nameInput, emailLabel, emailInput, selectorLabel, selector, message, messageBtn);
    formCont.appendChild(form);
    chapterCont.append(chapParaCont, chapMainCont);
    content.appendChild(mainContainerCont);
}