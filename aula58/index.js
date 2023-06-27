/* 
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);
let contador = 0;

while (rand !== 1) {
    rand = random(min, max);
    console.log(rand)
    contador++;
}
console.log('O número de vezes até cair 10 foi:  ', contador+1);
 */


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('#####')

do {
    rand= random(min, max);  // do while sempre vai executar primeiro
    console.log(rand);
}   while (rand !==10);
