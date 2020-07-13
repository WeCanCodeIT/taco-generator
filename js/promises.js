const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    const isEven = number => number % 2 === 0

    isEven(randomNumber) ?
        resolve(`Your random even number is ${randomNumber}`) :
        reject(`Number returned was odd.`)
})

getEvenRandomNumberBetweenTwoAndTen
    .then(res => console.log(res))
    .catch(err => console.error(err))