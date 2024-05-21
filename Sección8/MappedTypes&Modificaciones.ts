// Mapping & Modifiers (redonly, -, ?)

type User = {
    name: string;
    email: string;
}

type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type NonReadonly <T> = {
    -readonly [P in keyof T]: T[P]
}

// Usando el ?
type Ses <T> = {
    [P in keyof T]?: T[P]
}

type X<T extends object> = {
    //[P in keyof T]: T[P]
    [P in keyof T]: {
        readonly message: string;
    }

}

const z : X<User> = {
    name: {
        message: "Hello"
    },
    email: {
        message: "Hello"
    }
}