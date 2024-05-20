type User = {
    name: string,
    age: number
}

const user: User = {
    name: 'John',
    age: 30
}

function x<T>(value: T): T {
    return value
}

const result = x<User>(user)

console.log(result)

const result2 = x<number>(10)
console.log(result2)