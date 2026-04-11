import "./style.css";
import { toMeet } from "./components/toMeet";
import { toDine } from "./components/toDine";
import { toVisit } from "./components/toVisit";
import { footer } from "./components/footer";
import { enquiry } from "./components/enquiry";
import { reserve } from "./components/reserve";

const content = document.querySelector("#content");

function renderPage(funcPage) {
    content.innerHTML = "";
    funcPage();
    footer();
}

function toMeetPage() {
    toMeet();
    enquiry();
}

function toDinePage() {
    toDine();
}

function toReservePage() {
    toVisit();
    reserve();
}


document.querySelector("#meetBtn").addEventListener("click", () => {
    renderPage(toMeetPage);
});
document.querySelector("#dineBtn").addEventListener("click", () => {
    renderPage(toDinePage);
});
document.querySelector("#visitBtn").addEventListener("click", () => {
    renderPage(toReservePage);
})

renderPage(toMeetPage);