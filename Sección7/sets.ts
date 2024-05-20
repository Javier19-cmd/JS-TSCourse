//sets

const number: number[] = [1,1,2,3,4,5,6];

const set = new Set([1,1, 2,3,4,5,6]);

console.log("Set")
console.log(set);

set.add(10);
set.add(20);

console.log("Has")
console.log(set.has(10));
console.log(set.has(30));

set.delete(1);