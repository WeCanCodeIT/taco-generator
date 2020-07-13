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

    while (container.firstChild) {
        container.firstChild.remove();
    }

    container.prepend(createHeader(tacoToDisplay))
    container.appendChild(createRecipeSection(tacoToDisplay));
    container.appendChild(createFooter())

    addResetButton();
}

const addResetButton = () => {
    const button = document.querySelector('.header__taco-reset-button');

    button.addEventListener('click', () => {
        fetchTaco()
            .then(taco => renderPage(taco));
    });
}