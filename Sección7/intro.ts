type Persona = {
    nombre: string;
    edad: number;
    bienvenida: () => void;
}

const persona = {
    nombre: "Tony",
    edad: 45,
    bienvenida: function (){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
    }
}

console.log(persona)
persona.bienvenida()