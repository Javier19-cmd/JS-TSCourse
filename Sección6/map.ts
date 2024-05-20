// forEach
let array = [1, 2, 3, 4, 5];
console.log("forEach");
array.forEach((el, index) => {
    console.log(`El elemento en la posición ${index} es ${el}`);
});

type Student = {
    name: string;
    age: number;
}

const students: Student[] = [
    { name: "John", age: 21 },
    { name: "Jane", age: 22 },
    { name: "Doe", age: 23 }
]

console.log("\nforEach con objetos");
students.forEach((student, index) => {
    console.log(`El estudiante en la posición ${index} es ${student.name}`);
});

// map
console.log("\nmap");
students.map((student, index) => {
    console.log(`El estudiante en la posición ${index} es ${student.name}`);
});

const newStudents = students.map(function (student) {
    return {
        ...student,
        isAdult: student.age >= 18
    }
})

console.log("\n Reto");
console.log(newStudents)