console.log('1')
const promise = new Promise(()=>{
    console.log('2')
})
console.log('3')

//1 2 3

console.log('1')
const promise2 = new Promise(()=>{
    console.log('2')
}).then(()=>{
    console.log('4')
})
console.log('3')

//1 2 3, 4 мы не увидим т.к промис не разезолвлен

console.log('1')
const promise3 = new Promise((resolve, reject)=>{
    resolve()
    console.log('2')
}).then(()=>{
    console.log('4')
})
console.log('3')

//1 2 3 4 т.к промис зарезолвлен