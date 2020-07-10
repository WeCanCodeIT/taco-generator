export {
    fetchTaco
}

const fetchTaco = async () => {
    return fetch('http://taco-randomizer.herokuapp.com/random/')
        .then(response => response.json())
}