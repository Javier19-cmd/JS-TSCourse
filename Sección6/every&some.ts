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

// filter() retorna un array con todos los elementos que cumplan con la condición implementada por la función dada.
const newStudents = students.filter(function (student) {
    return student.age > 21
})

console.log(newStudents)

// .every() retorna true si todos los elementos cumplen la condición implementada por la función dada.
const allStudentsAreAdults = students.every(student => student.age >= 18)
console.log(".every()")
console.log(allStudentsAreAdults)

// .some() retorna true si al menos un elemento cumple con la condición implementada por la función dada.
const someStudentIsAdult = students.some(student => student.age >= 18)
console.log(".some()")
console.log(someStudentIsAdult)