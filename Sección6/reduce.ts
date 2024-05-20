type Student = {
    name: string;
    age: number;
}

const students: Student[] = [
    { name: "John", age: 22 },
    { name: "John", age: 21 },
    { name: "Jane", age: 22 },
    { name: "Doe", age: 23 }
]

// .reduce() reduce el array a un valor

const totalAge = students.reduce((acc, student) => {
    console.log(acc, student)
    return acc + student.age
}, 0)

console.log("\n.reduce()")
console.log(totalAge)

// Challenge
const words = ["apple", "banana", "apple", "orange", "banana", "apple", "apple", "orange", "orange", "apple"]

// retornar la que tiene mayor longitud
const longestWord = words.reduce((acc, word) => {
    if (word.length > acc.length) {
        return word
    } else {
        return acc
    }
}, "")

console.log("\nChallenge")
console.log(longestWord)