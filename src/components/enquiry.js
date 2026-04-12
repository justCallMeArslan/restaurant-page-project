import { createElement } from "./support";

export function enquiry() {
    const content = document.querySelector('#content');

    const mainContainerEnq = createElement("div", "main-cont");
    const formEnq = createElement("div", "form-container");
    const chapterEnq = createElement("div", "chapter-cont");
    mainContainerEnq.append(chapterEnq, formEnq);

    const chapParaEnq = createElement("p", "text-h2-header");
    chapParaEnq.textContent = "Let's Connect";
    const chapMainEnq = createElement("h2", "text-h2");
    chapMainEnq.textContent = "Enquiry";

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
    selectorLabel.htmlFor = "enquiry"; // used for screen readers and crawlers
    selectorLabel.textContent = "Nature of enquiry";
    const selector = createElement("select", "form-reserv");
    selector.id = "enquiry"; // connects label and selector
    selector.name = "enquiry";
    selector.required = true;

    const selectorPlaceHolder = createElement("option", "form-reserv");
    selectorPlaceHolder.textContent = "Please, select an option:";
    selectorPlaceHolder.disabled = true;
    selectorPlaceHolder.selected = true;
    selector.appendChild(selectorPlaceHolder);


    const options = [
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

    const message = createElement('textarea', "form-reserv");
    message.id = "message";
    message.name = "message";
    message.maxLength = 200;
    message.rows = 7;
    message.placeholder = "Share your enquiry here...";
    message.setAttribute("aria-label", "Share your enquiry");

    const shareBtn = createElement("button", "submitBtn");
    shareBtn.textContent = "To share";
    shareBtn.type = "submit";

    form.append(nameLabel, nameInput, emailLabel, emailInput, selectorLabel, selector, message, shareBtn);
    formEnq.appendChild(form);
    chapterEnq.append(chapParaEnq, chapMainEnq);
    content.appendChild(mainContainerEnq);
}