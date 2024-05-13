const user = {
    name: "John",
    lastName : "Doe",
    age: 30,
    _password: "*****",
    fullName(){
        return this.name + " " + this.lastName;
    }
}

console.log(user.fullName);