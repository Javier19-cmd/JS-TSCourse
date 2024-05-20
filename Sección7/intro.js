class Persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    bienvenida() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
    }
}

const p1 = new Persona('Juan', 23);

console.log(p1)
p1.bienvenida()