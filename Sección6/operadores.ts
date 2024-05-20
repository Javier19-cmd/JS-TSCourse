// .concat -> concatenar
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);

console.log("concat");
console.log(array3);

// operador spread
const array4 = [...array1, ...array2];
console.log("operador spread");
console.log(array4);

// desestructuración de objetos
const obj = {
    a: 1,
    b: 2,
    c: 3
}

const { a, b, c } = obj;
console.log("desestructuración de objetos");
console.log(a);
console.log(b);
console.log(c);

// parámetro rest
const sum = (...args: number[]) => {
    return args.reduce((acc, el) => acc + el, 0);
}

console.log("parámetro rest");
console.log(sum(1, 2, 3, 4, 5));