// классы нужны для создания однотипных объектов

const o1 = {
    title: 'js',
    isBusy: false,
    sayHello() {
        console.log(`${this.title}, hello`)
    }
}

const o2 = {
    title: 'css',
    isBusy: true,
    sayHello() {
        console.log(`${this.title}, hello`)
    }
}

// до классов использовали фабричные функции

const o1 = createTypicalObject('js', false) // action creator -> factory function
const o2 = createTypicalObject('css', true)

function createTypicalObject(title, isBusy) {
    const o = {
        title: title,
        isBusy: isBusy,
        sayHello() {
            console.log(`${this.title}, hello`)
        }
    }
    return o
}

