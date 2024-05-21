// Una intersección de tipos es una forma de combinar múltiples tipos en uno. Esto permite agregar tipos adicionales a un objeto exsitente. Se utiliza el símbolo &.
type User ={
    name: string;
    age: number;
}

const user: User = {
    name: "John",
    age: 30
}

type UserwithEmail = User & 
{
    email: string
} | {
    phone: string
} & {
    address: string
};


const UserwithEmail: UserwithEmail = {
    ...user,
    email: "",
    phone: "",
    address: ""
}

// Una unión de tipos es una forma de decir que un valor puede ser varios tipos. Se utiliza OR |.