fetch('https://google.com')
    .then((dataFromGoogle) => {
        console.log('response from google')
        return fetch('https://yandex.com')
    })
    .then(() => {
        console.log('response from yandex')
        return fetch('https://bing.com')
    })
    .then(() => {
        console.log('response from bing')
    })
    .catch(() => {
        console.log('ERROR FROM SOME PROMISE')
    })