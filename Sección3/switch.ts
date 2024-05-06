const fruta : string = 'pera';

if (fruta == 'manzana') {
    console.log('Es una manzana');
} else if (fruta == 'pera') {
    console.log('Es una pera');
} else if (fruta == 'naranja') {
    console.log('Es una naranja');
} else {
    console.log('No es ninguna de las anteriores');
}

switch (fruta) {
    case 'manzana':
        console.log('Es una manzana');
        break;
    case 'pera':
        console.log('Es una pera');
        break;
    case 'naranja':
        console.log('Es una naranja');
        break;
    default:
        console.log('No es ninguna de las anteriores');
}