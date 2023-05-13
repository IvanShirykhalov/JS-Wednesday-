// class User {
//     constructor(name) {
//         this.name = name
//         this.state = {}
//         this.someMethod = function () {
//         }
//     }
//
//     render() {
//         return `My name is ${this.name}`
//     }
// }

function User() {
    //this = {}
    this.name = name
//         this.state = {}
//         this.someMethod = function () {
//         }
    //return this
}

User.prototype.render = function () {
    return `My name is ${this.name}`
}
//создали рендер для prototype класса, чтобы инстансы созданные с помощью класса User
// могли по ссылке __proto__ к нему достучаться

const u1 = new User('Oleg') //
const u2 = new User('Igor')
//u1 and u2 = objects {}

console.log(u1.render())
console.log(u2.render())