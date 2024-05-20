const users = ["John", "Lucas", "María"]
console.log(users)

const ages: (string | number)[] = [23, 34, 45, "32"]

ages[5] = 32

console.log(ages)

type User = {
    id: String,
    name: String,
    email: String
}

const users: (Users | number)[] = [
    {
        id: "1",
        name: "John",
        email: "john.@gmail.com"
    },
    5
]