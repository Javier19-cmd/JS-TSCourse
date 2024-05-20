// for...in

console.log("\nfor...in")

type Obj = {
    [key: string]: number;
}

const obj: Obj = {
    a: 1,
    b: 2,
}

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// Object.entries()

console.log("\nObject.entries()")
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});

// Object.keys()

const keys = Object.keys(obj);
console.log("\nObject.keys()")
console.log(keys);

// Object.values()

const values = Object.values(obj).reduce((acc, value) => acc + value, 0);
console.log("\nObject.values()")

// Object.getOwnPropertyNames()
console.log("\nObject.getOwnPropertyNames()")
console.log(Object.getOwnPropertyNames(obj));

Object.defineProperties(obj, {
    c: {
        value: 3,
        enumerable: false,
    }
});

console.log(Object.getOwnPropertyNames(obj));