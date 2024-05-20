type User = {
    name: string,
    age: number
}

const user: User = {
    name: 'John',
    age: 30
}

function suma (a: any):any {
    return a + a
}

const resultSuma = suma(10) as number;
console.log(resultSuma)

function x<T>(value: T): T {
    if (typeof value === 'number') {
        return (value + value) as any as T;
    }
    return value;
}

const result = x<User>(user)

console.log(result)

const result2 = x<number>(10)
console.log(result2)