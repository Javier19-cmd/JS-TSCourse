type User = {
    name: string;
    age: number;
}

function algo<T extends User & {[k: string]: T[keyof T]}> (obj: T){
    return obj;
}

algo<User>({name: "John", age: 30, email: "", phone: "", address: ""});