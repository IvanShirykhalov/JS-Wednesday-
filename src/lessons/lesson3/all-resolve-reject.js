const promise1 = fetch('https://google.com')
const promise2 = fetch('https://yanbex.com')
const promise3 = fetch('https://bing.com')


//запросы друг за другом
fetch('https://google.com')
    .then(() => {
        console.log('google')
        return fetch('https://yanbex.com')


    })
    .then((dataFromYandex) => {
        console.log('yandex')
        return fetch('https://bing.com')
    })
    .then((dataFromBing) => {
        console.log('bing')
    })

//в одну строчку
fetch('https://google.com')
    .then(() => fetch('https://yanbex.com'))
    .then((dataFromYandex) => fetch('https://bing.com'))
    .then((dataFromBing) => {
    })

//одновременные запросы
fetch('https://google.com')
    .then((dataFromGoogle) => {
        console.log('dataFromGoogle')
    })
fetch('https://yanbex.com')
    .then((dataFromYandex) => {
        console.log('dataFromYandex')
    })
fetch('https://bing.com')
    .then((dataFromBing) => {
        console.log('dataFromBing')
    })


//обработка результата, когда все трипромиса зарезолвятся
const pr1 = fetch('https://google.com')
const pr2 = fetch('https://yanbex.com')
const pr3 = fetch('https://bing.com')

Promise.all([pr1, pr2, pr3]).then((arrayWithDataAllPR) => {
    //ответы по порядку
    arrayWithDataAllPR[0]
    arrayWithDataAllPR[1]
    arrayWithDataAllPR[2]
})


//аналогичный код

Promise.all([
    fetch('https://google.com'),
    fetch('https://yanbex.com'),
    fetch('https://bing.com'),])
    .then((arrayWithDataAllPR) => {
        //ответы по порядку
        arrayWithDataAllPR[0]
        arrayWithDataAllPR[1]
        arrayWithDataAllPR[2]
        //если хотя бы один промис не зарезолвился, то Promise.all не зарезолвится
    })

Promise.allSettled([
    fetch('https://google.com'),
    fetch('https://yanbex.com'),
    fetch('https://bing.com'),])
    .then((arrayWithDataAllPR) => {
        //ответы по порядку
        arrayWithDataAllPR[0]
        arrayWithDataAllPR[1]
        arrayWithDataAllPR[2]
        //промис разеловится, когда будет определенность с внутренними промисами
    })

