// satisfies

type User = {
    id: string;
    name: string;
    email: string;
}

type Booleanify<T> = {
    [P in keyof T]: boolean;
}

type BooleanifiedUser = Booleanify<User>;

const BooleanUser = Booleanify<User>;
const PartialUser = Partial<BooleanUser> & {
    emailVerified: boolean;
}

const userSelect: BooleanifiedUser = {
    id: true,
    name: false,
    email: false
} satisfies PartialUser;

function getUserById<T>(select: T): T {
    return select;
}

const user = getUserById(userSelect);

console.log(user.id); // true
