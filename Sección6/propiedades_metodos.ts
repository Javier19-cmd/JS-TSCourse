// .length
console.log(".length")
const obj = {
    length: 5,
    log() {
    }
}

console.log(obj.length)

const array: number[] = [1, 2, 3, 4, 5]
console.log(array.length)

array.length = 8
console.log(array)

// .push(elemento) -> añade un elemento al final del array
const array2: number[] = [1, 2, 3, 4, 5]
array2.push(6, 2)
console.log(".push(elemento)")
console.log(array2)

// .pop() -> elimina el último elemento del array
const array3: number[] = [1, 2, 3, 4, 5]
array3.pop()
console.log(".pop()")
console.log(array3)

// .shift() -> elimina el primer elemento del array
const array4: number[] = [1, 2, 3, 4, 5]
array4.shift()
console.log(".shift()")
console.log(array4)

// .unshift(elemento) -> nueva longitud
const array5: number[] = [1, 2, 3, 4, 5]
array5.unshift(0)
console.log(".unshift(elemento)")
console.log(array5.unshift(0))