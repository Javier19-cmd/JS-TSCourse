// CHALLENGE

/*
1. Escribe una sentencia switch que evalúe una variable que represente un día 
de la semana (por ejemplo, "lunes", "martes", etc.). Para cada día, registra un mensaje diferente en la
consola. Por ejemplo, si la variable es "lunes", la consola debe registrar "Es el comienzo de una nueva semana". Uitiliza
un caso por defect opara los valores que no sean días de la semana.

Lunes - Es el comienzo de una nueva semana.
Martes - Ya estamos en martes.
Miércoles - Ya estamos en la mitad de la semana.
Jueves - Ya estamos en jueves.
Viernes - Ya estamos en viernes.
Sábado - Ya estamos en sábado.
Domingo - Ya estamos en domingo.
Otro - Ese no es un día de la semana.
*/

const dia : string = 'lunes';

switch (dia) {
    case 'lunes':
        console.log('Es el comienzo de una nueva semana');
        break;
    case 'martes':
        console.log('Ya estamos en martes');
        break;
    case 'miércoles':
        console.log('Ya estamos en la mitad de la semana');
        break;
    case 'jueves':
        console.log('Ya estamos en jueves');
        break;
    case 'viernes':
        console.log('Ya estamos en viernes');
        break;
    case 'sábado':
        console.log('Ya estamos en sábado');
        break;
    case 'domingo':
        console.log('Ya estamos en domingo');
        break;
    default:
        console.log('Ese no es un día de la semana');
}

/*
2. Crear una sentencia switch que evalúe una variable que represente una calificación
(por ejemplo, "A", "B", "C", "D", "F"). Para cada calificación, registra un mensaje diferente en la consola
indicando si la calificación es apta o no. Uitilizar un caso por defecto para cualquier valor que no sea una calificación 
válida.
*/

const calificacion : string = 'A';

switch (calificacion) {
    case 'A':
        console.log('Calificación apta');
        break;
    case 'B':
        console.log('Calificación apta');
        break;
    case 'C':
        console.log('Calificación apta');
        break;
    case 'D':
        console.log('Calificación apta');
        break;
    case 'F':
        console.log('Calificación no apta');
        break;
    default:
        console.log('Esa no es una calificación válida');
}

/*

3. Escribir una setencia switch que evalúe una variable que represente un número del 1 al 7.
Utilizar esta variable para determinar el día de la semana correspondiente y registrar un mensaje en la consola.
(por ejemplo, 1 = "lunes", 2 = "martes", etc.). Utilizar un caso por defecto para cualquier valor que no sea un número del 1 al 7.
*/

const numero : number = 1;

switch (numero) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Ese no es un número del 1 al 7');
}

