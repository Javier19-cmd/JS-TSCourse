// indexed access -> acceso por índice

const user = {
    email: {
        primary: "email@gmail.com",
        secondary: "secondary@gmail.com"
    },
    name: "name"
}

type User = typeof user;
user.email.primary
user["email"]["primary"]

const array: [string, string][] = [
    ["a", "b"],
    ["c", "d"]
];

array[0][1]

function getEmail(user: User): {primary: string; secondary: string}{

    const email = user.email

    const {secondary} = email;
    return {primary: email.primary, secondary};
}

const users = [{name: "name", email: "email"}]

type Users = typeof users;

function getEmails(users: Users): string[]{
    return users.map(user => user.email);
}

getEmails(users);

console.log(getEmail(user));