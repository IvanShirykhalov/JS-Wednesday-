export const print = (name: string) => {
    console.log(`hello, ${name}`)
}

const createPrint = (name: string) => {
    return () => print(name)
}


setTimeout(createPrint('Igor'), 1000)
setTimeout(createPrint('NeIgor'), 1000)


const thunkMiddleware = (thunk: any) => {
    thunk({title: 'superObj'}, () => {
    })
}

const getUserCreator = (id: any) => {
    const thunk1 = (superObj: any, superFunc: any) => {
        //fetch(`https://google.com${id}`)
    }
    return thunk1
}
thunkMiddleware(getUserCreator(10))


const func1 = () => {
    return () => {
        console.log(10)
    }
}

func1()()

const sum = (a: number, b: number) => {
    return a + b
}

const sumValue = sum(1, 10)

const func2 = (a: number) => (b: number) => (c: number) => (d: number) => (e: number) => console.log(a + b + c + d + e)
func2(1)(2)(3)(4)(5)


const createCounter = (initValue: number) => {
    const counter = {
        increment() {
            initValue++
        },
        getCounter() {
            return initValue
        }
    }
    return counter
}

const counter1 = createCounter(10)
const counter2 = createCounter(20)

counter1.increment()//11
counter1.increment()//12
counter2.increment()//21


/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (start: number, end: number) => {
    return (el: number) => {
        return el >= start && el <= end
    }
}

console.log(arr.filter(inBetween(1, 7))); // 3,4,5,6



