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