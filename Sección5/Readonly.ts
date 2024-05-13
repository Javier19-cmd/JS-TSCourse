type Post = {
    readonly title: string;
    readonly content: string;
    readonly date: string;
    readonly anotherPost?: {
        title: string;
        content: string;
    }
};

type User = {
    readonly name: string;
    readonly lastName: string;
    readonly age: number;
    readonly _password?: string;
    readonly fullName: () => string;
    readonly post?: Post;
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

console.log(user.name); // John