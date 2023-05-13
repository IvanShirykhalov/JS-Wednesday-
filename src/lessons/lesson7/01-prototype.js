class User {
    constructor(name) {
        this.name = name
        this.state = {}
        this.someMethod = function () {
        }
    }

    render() {
        return `My name is ${this.name}`
    }
}

//user1 & user2 (инстансы) экземпляры класса User
const user1 = new User('Igor')
const user2 = new User('Igor')

//user1 & user2 - два однотипных объекта
//user1.name === user2.name - равны т.к name примитивы (равны по значению)
//user1.state === user2.state - не равны т.к это объекты
//user1.render === user2.render - равны
//user1.someMethod === user2.someMethod - не равны

console.log(user1.render === user2.render)

//user1.__proto__ === User.prototype
//console.log(user1.__proto__ === User.prototype) true

//__proto__ это ссылка на prototype класса (родителя)


//Object.__proto__ === Function.prototype - true