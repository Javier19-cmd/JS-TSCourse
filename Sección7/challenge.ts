/* CHALLENGE
Crear una nueva clase llamada "Auto" con los siguientes atributos: 

marca: string
modelo: string
año: number
encendido: boolean

Crear un constructor que tome los valores de marca, modelo y año como parámetros y los asigne a las propiedades correspondientes. Inicializa la propiedad "encendido" en false.

Crear un método llamado "encender" que cambie la propiedad "encendido" a true y de un mensaje en consola que diga "El auto está encendido".

Crear un método llamado "apagar" que cambie la propiedad "encendido" a false y de un mensaje en consola que diga "El auto está apagado".

Crear una instancia de la clase "Auto" con los valores "Toyota", "Camry", 2019 y prueba los métodos "encender" y "apagar".
Asegurar de que los mensajes se enseñen correctamente y que la propiedad "encendido" cambie correctamente.
*/

class Auto {
    marca: string;
    modelo: string;
    año: number;
    encendido: boolean;
  
    constructor(marca: string, modelo: string, año: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.encendido = false;
    }
  
    encender(): void {
      this.encendido = true;
      console.log("El auto está encendido");
    }
  
    apagar(): void {
      this.encendido = false;
      console.log("El auto está apagado");
    }
  }
  
  // Creando una instancia de la clase "Auto"
  const miAuto = new Auto("Toyota", "Camry", 2019);
  
  miAuto.encender();
  console.log(miAuto.encendido);
  
  miAuto.apagar();
  console.log(miAuto.encendido);