// map

const fruits = {
    apple: 0.99,
    orange: 1.99,
    pear: 2.99,
}

const map = new Map<string, number>()

map.set('apple', 0.99)
map.set('orange', 1.99)
map.set('pear', 2.99)

console.log("\nMap")
console.log(map)

console.log("\nGET")
console.log(map.get('apple'))

map.clear()
console.log("\nMap")
console.log(map)