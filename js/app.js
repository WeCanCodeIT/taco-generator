import {
    fetchTaco
} from "./tacoFetcher.js"
import {
    createFooter
} from "./components/footer.js"
import {
    createHeader
} from "./components/header.js"
import {
    createRecipeSection
} from "./components/tacoRecipeSection.js";

fetchTaco()
    .then(taco => renderPage(taco));


const renderPage = (tacoToDisplay) => {
    const container = document.querySelector('.container');
    container.prepend(createHeader(tacoToDisplay))
    container.appendChild(createRecipeSection(tacoToDisplay));
    container.appendChild(createFooter())
}