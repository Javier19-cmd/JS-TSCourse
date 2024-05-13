type Post = {
    title: string;
    content: string;
    date: string;
};

type User = {
    name: string;
    lastName: string;
    age: number;
    _password?: string;
    fullName: () => string;
    post: Post;
};

const user: User = {
    name: "John",
    lastName: "Doe",
    age: 30,
    _password: "1234",
    fullName(){
        return this.name + " " + this.lastName;
    },
    post: {
        title: "Mi post",
        content: "Contenido del post",
        date: "2020-01-01",
    }
};

// Desestructuración correcta del objeto
const { name: nombre, lastName: apellido, ...resto } = user;

console.log(resto)

const restoPropiedades = {
     ...resto,
     age: 0 
    };

console.log("Resto de propiedades con age en 0: ")
console.log(restoPropiedades);