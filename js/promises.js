const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {

    window.setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10 + 1)
        const isEven = number => number % 2 === 0
        if (isEven(randomNumber)) {
            if (randomNumber < 5) {
                resolve(`You have a low even number, ${randomNumber}`)
            } else {
                resolve(`You have a high even number, ${randomNumber}`)
            }
        } else {
            reject(`Number returned was odd.`)
        }
    }, 1000);

})

getEvenRandomNumberBetweenTwoAndTen
    .then(res => console.log(res))
    .catch(err => console.error(err))

console.log("HELLO!")