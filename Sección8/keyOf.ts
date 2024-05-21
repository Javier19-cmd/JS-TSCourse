// keyof 

const person = {
    name: 'Luis',
    age: 22
}

type Person = typeof person;
type PersonKeys = keyof Person;
type StringKeys = keyof string;
type NumberKeys = keyof number;
type ArrayKeys = keyof any[];