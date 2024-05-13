"use strict";

// key value pairs -> pareja de llaves y valores

// JSON -> JavaScript Object Notation


const usuario1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    },
    imprimir(){
        // this hace referencia al objeto actual.
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}`);
    }
};


// Añadiendo propiedades a un objeto
if (usuario1.edad >= 18){
    usuario1.imprimirEdad = () => console.log(`Tengo ${this.edad} años`);

    // Modificando propiedades de un objeto
    usuario1.nombre = `MAYOR DE EDAD ${usuario1.nombre}`;
}

usuario1.imprimir();
console.log(usuario1);

// Delete -> Elimina una propiedad de un objeto

delete usuario1.imprimir;
delete usuario1.imprimirEdad;

console.log(usuario1);