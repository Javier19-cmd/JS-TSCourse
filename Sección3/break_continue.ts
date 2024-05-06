// break
// break: stop the loop
let i = 0;
while (i < 10) {
    console.log(i);
    if (i === 5) {
        console.log('Condición cumplida');
        break;
    }
    i++;
}
// continue
// continue: skip the current iteration
let j = 0;
while (j < 10) {
    if (j === 5) {
        j++;
        console.log('Condición cumplida, se ejecuta el continue');
        continue;
    }
    console.log(j);
    j++;
}