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
const {
    name: nombre, 
    lastName: apellido, 
    age: edad,
    post: 
        {
            title: titulo, 
            content: contenido, 
            date: fecha
        },
    _password: password = "No tiene contraseña"
} = user;

console.log(nombre, apellido, edad);

console.log(titulo, contenido, fecha);

console.log(password);