type User = {
    id: number
    name: string
    age: number
    email: string
    password: string
}

// Partial

type PartialUser = Partial<User>

// Required

type RequiredUser = Required<User>

// Omit

type OmitUser = Omit<User, 'password'>

// Pick

type PickUser = Pick<User, 'name' | 'age'>