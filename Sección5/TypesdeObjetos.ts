type User = {
    name: string;
    lastName: string;
    age: number;
    _password?: string;
    fullName: () => string;
};

const user: User = {
    name: "John",
    lastName: "Doe",
    age: 30,
    fullName(){
        return this.name + " " + this.lastName;
    }
};

console.log(user.fullName());

const contrsena = user._password;

// if contrasena -> ! undefined ! null ! 0 ! "" ! false 
if(contrsena){
    console.log("Tiene contraseña");
}else{
    console.log("No tiene contraseña")
}