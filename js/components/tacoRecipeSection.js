export {
    createRecipeSection
}

const createRecipeSection = (taco) => {
    const mainSection = document.createElement("main");
    mainSection.classList.add('taco');
    mainSection.innerHTML = `
    <section class="taco-component taco-base-layer">
                <h2 class="taco-base-layer__title">${taco.base_layer.name}</h2>
                <p class="taco-base-layer__recipe">${taco.base_layer.recipe}</p>
            </section>
            <section class="taco-component taco-mixin">
                <h2 class="taco-mixin__title">${taco.mixin.name}</h2>
                <p class="taco-mixin__recipe">${taco.mixin.recipe}</p>
            </section>
            <section class="taco-component taco-condiment">
                <h2 class="taco-condiment__title">${taco.condiment.name}</h2>
                <p class="taco-condiment__recipe">${taco.condiment.recipe}</p>
            </section>
            <section class="taco-component taco-seasoning">
                <h2 class="taco-seasoning__title">${taco.seasoning.name}</h2>
                <p class="taco-seasoning__recipe">${taco.seasoning.recipe}</p>
            </section>
            <section class="taco-component taco-shell">
                <h2 class="taco-shell__title">${taco.shell.name}</h2>
                <p class="taco-shell__recipe">${taco.shell.recipe}</p>
            </section>
    `

    return mainSection
}