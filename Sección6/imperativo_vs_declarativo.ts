const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declarativo
console.log("\nDeclarativo")
const doubleNumbers = numbers.map((number) => number * 2);  
console.log(doubleNumbers);

// Imperativo
console.log("\nImperativo")
const doubleNumbers2 = [];
for (let i = 0; i < numbers.length; i++) {
    doubleNumbers2.push(numbers[i] * 2);
}
console.log(doubleNumbers2);