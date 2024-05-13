type Post = {
    title: string;
    content: string;
    date: string;
    anotherPost?: {
        title: string;
        content: string;
    }
};

type User = {
    name: string;
    lastName: string;
    age: number;
    _password?: string;
    fullName: () => string;
    post?: Post;
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
        anotherPost: {
            title: "Otro post",
            content: "Más contenido"
        }
    }
};

// Optional chaining & nullish coalescing operator (?. and ??)
// Aquí estamos accediendo correctamente a la propiedad anotherPost de post si existe, y si no, usamos _password.
const postTitle = user.post?.anotherPost?.title ?? user._password ?? "No hay post";

console.log(postTitle); // Debería imprimir el título de anotherPost si existe, o "1234" si no. En este caso, debería imprimir "Otro post".