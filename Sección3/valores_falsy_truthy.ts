// Valores Falsy
/*
- false
- 0
- ''| "" | ``
- null
- undefined
- NaN
*/

// Valores Truthy
/*
- true
- != 0
- != '' | "" | ``
- != null
- != undefined
- != NaN
*/

const miNombre = "";

if (miNombre) {
    console.log("Es verdadero");
}else {
    console.log("Es falso");
}