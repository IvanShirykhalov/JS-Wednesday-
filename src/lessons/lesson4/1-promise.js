// промис - это объект у которого есть состояние pending, fulfilled and rejected
// и методы then, catch and finally

//создание промиса - new Promise()


//промисификация
new Promise((resolve, reject) => {
//что-то оборачиваем в промис, просто чтобы было удобнее работать
    //аще всего мы оборачиваем асинхронные операции, потому что
    //если они изначально не поддерживают промисы, то с ними приходится
    // работать через колбеки
})


wait(1000)
    .then((one) => console.log(one))
    .then(() => wait(2000))
    .then((two) => console.log(two))
    .then(() => wait(3000))
    .then((three) => console.log(three))
    .catch((err) => {
        console.warn(err)
    })


async function run() {
    try {
        const one = await wait(1000)
        await console.log(`${one} ms`)
        await console.log(1)
        const two = await wait(2000)
        await console.log(`${two} ms`)
        await console.log(2)
        const three = await wait(3000)
        await console.log(`${three} ms`)
        await console.log(3)
    } catch (error) {
        console.warn(error)
    }

}

run()


function wait(ms) {
    return new Promise((res) => {
        setTimeout(() => {
            res(ms)
        }, ms)
    })
}

// Promise.all
const allPromises = Promise.all([
    wait(1000),
    wait(2000)
])

allPromises.then((array) => {
    console.log(array[0])
    console.log(array[1])

})


const api = {
    async gerUsers() {
        await wait(2000)
        return [{id: 1, name: 'Oleg'},]
    }
}