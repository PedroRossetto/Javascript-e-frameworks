//saber se o numero esta entre 0 e 10 ou entre 10 e 20

const numero = 200;

if (numero >= 0 && numero <=10) {
    console.log('Esse numero esta entre 0 e 10')
} else if (numero > 10 && numero <= 20) {
    console.log('Esse numero esta entre 10 e 20')
} else if (numero <0) {
    console.log('Esse numero é menor que 0')
} else {
    console.log('Esse numero é maior que 20')
}