import "./style.css";
import { renderFront } from "./components/frontPage";
import { toMeet } from "./components/toMeet";
import { toDine } from "./components/toDine";
import { toVisit } from "./components/toVisit";
import { contact } from "./components/contact";
import { footer } from "./components/footer";

function renderLanding() {
    content.innerHTML = "";

    renderFront();
    toMeet();
    toDine();
    toVisit();
    contact();
    footer();
}

renderLanding();