const miFuncionSinNombre: () => void = () => {
    console.log('Hola');
}

//miFuncionSinNombre();

const x: () => () => () => void = () => {
    return function (): () => void {
        console.log(10);
        return function (): void {
            console.log(20);
        }
    }
}

const z = x()()();

z; // returns 10