import "./style.css";
import { toMeet } from "./components/toMeet";
import { toDine } from "./components/toDine";
import { toVisit } from "./components/toVisit";
import { footer } from "./components/footer";
import { enquiry } from "./components/enquiry";
import { reserve } from "./components/reserve";

const content = document.querySelector("#content");

function clearPage() {
    content.innerHTML = "";
}

function renderLanding() {
    clearPage()
    toMeet();
    enquiry();
    footer();
}

renderLanding();

function renderMenu() {
    clearPage();
    toDine();
    footer();
}

function renderReservation() {
    clearPage();
    toVisit();
    reserve();
    footer();
}

