export {
    createHeader
}

const createHeader = (taco) => {
    const header = document.createElement("header");
    header.classList.add('header')
    header.innerHTML = `
            <h1 class="header__title">TACO TUESDAY TACO GENERATOR!</h1>
            <h2 class="header__taco-title">
                <span class="header__title-element" id="header__title--base-layer">${taco.base_layer.name}</span> with
                <span class="header__title-element" id="header__title--mixin">${taco.mixin.name}</span>, garnished with
                <span class="header__title-element" id="header__title--condiment">${taco.condiment.name}</span>, topped off
                with
                <span class="header__title-element" id="header__title--seasoning">${taco.seasoning.name}</span>
                and wrapped in delicious
                <span class="header__title-element" id="header__title--shell">${taco.shell.name}</span>
            </h2>
            <button class="header__taco-reset-button">Roll for new tacos</button>
    `
    return header;
}