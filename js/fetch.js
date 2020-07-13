const button = document.querySelector(".button");
const id = document.querySelector(".id");

const updateCharacter = () => {
    fetch(`https://swapi.dev/api/people/${id.value}/`)
        .then(response => response.json())
        .then(character => updateCharacterHtml(character))
        .catch(err => console.log(err));
};

const updateCharacterHtml = character => {
    document.querySelector(".character__name").innerText = `${character.name}`;
    document.querySelector(".character__hair-color").innerText = `${character.hair_color}`;
    document.querySelector(".character__eye-color").innerText = `${character.eye_color}`;
    document.querySelector(".character__height").innerText = `${character.height}`;
};

button.addEventListener("click", updateCharacter);


fetch('http://localhost:8080/api/vendors/add/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "Added by fetch!",
        "phoneNumber": "614-867-5309"
    })
})