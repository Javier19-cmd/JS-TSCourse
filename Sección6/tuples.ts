// tuples
let x: [string, number];
x = ["hello", 10]; // OK

// Error
// x = [10, "hello"];

// Error
// console.log(x[0].substr(1));

console.log(x[0].toString());

const tuple2: [boolean, string, number, number] = [true, "test", 1, 2];

console.log(tuple2);

const tuple3: [string, () => string] = ["test", () => "test"];

console.log(tuple3);
