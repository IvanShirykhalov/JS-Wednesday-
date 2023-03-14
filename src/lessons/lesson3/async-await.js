// const run = async () => {
//     const dataFromGoogle = await fetch('https://google.com')
//     const parsedGoogleData = await parseGoogleResult(dataFromGoogle)
//     const dataFromIncubator = await fetch(parsedGoogleData[0])
//     const dataFromHexlet = await fetch(parsedGoogleData[1])
//     const finalData = await processData(dataFromIncubator, dataFromHexlet)
//     console.log('SUCCESS')
// }
//
// run()
//
//
// // 3
// function processData(data1, data2, callback) {
//     // AI, analysis
// }

const run = async () => {
    console.log('0')
    try {
        const dataFromGoogle = await fetch('https://google.com')
    } catch (error) {
        console.log('error from google')
    }
    try {
        const dataFromYandex = await fetch('https://yandex.com')
    } catch (error) {
        console.log('error from yandex')
    }
    try {
        const dataFromBing = await fetch('https://bing.com')
        console.log('dataFromBing')
    } catch (error) {
        console.log('error from bing')
    }

    console.log('1')
}

run()
const run2 = async () => {
    console.log('0')
    try {
        const dataFromGoogle = await fetch('https://google.com')
        const dataFromYandex = await fetch('https://yandex.com')
        console.log('data from yandex')
        const dataFromBing = await fetch('https://bing.com')

        console.log(dataFromGoogle, dataFromYandex, dataFromBing)
    } catch (error) {
        console.log('some error')
    }
    console.log('1')
}

run2()