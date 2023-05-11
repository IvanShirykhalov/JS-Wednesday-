//классы нужны для того, чтобы создвать однотипные (умные) объекты
//ООП: инкапсуляция, наследовательность, полиморфизм
//инкапсуляция - сокрытие деталей

class SomeObject {
    constructor(title, isBusy) {
        this.title = title
        this.isBusy = isBusy
        this.type = 'SOME/BLABLA'
    }

    sayHello() {
        console.log(`${this.title}, hello`)
    }
}

const o1 = new SomeObject('js', false)
const o2 = new SomeObject('css', true)

o1.sayHello()
o2.sayHello()


class SomeObject2 {
    //приватные свойства
    #title

    constructor(title, isBusy) {
        this.#title = title
        this.isBusy = isBusy
        this.type = 'SOME/BLABLA'
    }

    //метод (сеттер)
    setTitle(newTitle) {
        if (!newTitle) throw new Error('bad title')
        this.#title = newTitle
    }

    //метод (геттер)
    getTitle() {
        return this.#title
    }

    sayHello() {
        console.log(`${this.#title}, hello`)
    }
}

o3 = new SomeObject2('ts', false)
o3.sayHello()

o3.setTitle('TS')
o3.sayHello()
console.log(o3.getTitle())