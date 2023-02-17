let promise = {}

promise.then(() => {
}) // -> 'resolved'
promise.catch(() => {
}) // -> 'rejected'
promise.finally()
//promise._status = 'pending' // 'resolved', 'rejected'

//промис это объет, который имеет три состояния 'pending', 'resolved' и 'rejected'
// и три метода then, catch и finally
//с помощью then и catch мы подписываемся на событие


//ассинхронный код (fetch, setInterval, setTimeout)


const promise = fetch('https://google.com', (googleData))

promise.then((data) => {

})

promise1 = wait(10000)

// const thenPromise2 = promise1.then(() => {
//     console.log('subscriber for promise1 called')
// })
// const thenPromise3 = thenPromise2.then(() => {
//     console.log('subscriber for promise2 called')
//
// })

// promise1
//     .then(() => {
//         console.log('subscriber for promise1 called')
//     })
//     .then(() => {
//         console.log('subscriber for promise2 called')
//
//     })


// promise1
//     .then(() => {
//         console.log('subscriber for promise1 called')
//         const someNewPromise = wait(1000)
//         return someNewPromise
//     })
//     .then(() => {
//         console.log('subscriber for promise2 called')
//
//     })
//     .then(() => {
//         console.log('subscriber for promise3 called')
//         return {value: 100}
//
//     }).then((objWithValue) => {})

// fetch('https://google.com')
//     .then(() => {
//         console.log('subscriber for promise1 called')
//         const someNewPromise = wait(1000)
//         return someNewPromise
//     })
//     .then(() => {
//         console.log('subscriber for promise2 called')
//
//     })
//     .then(() => {
//         console.log('subscriber for promise3 called')
//         return {value: 100}
//
//     }).then((objWithValue) => {})


const run = async () => {

    const dataFromGoogle = await fetch('https://google.com')
    const parseGoogleData = parseGoogleResult(dataFromGoogle)
    const dataFromIncubator = await fetch(parseGoogleData[0])
    const dataFromHexlet = await fetch(parseGoogleData[1])
    const finalData = await processData(dataFromIncubator, dataFromHexlet)

    console.log('SUCCESS')
}

run()


function wait(ms) {
    return new Promise((resolveFunction) => {
        setTimeout(() => {
            console.log('before resolving')
            resolveFunction()
        }, ms)
    })
}