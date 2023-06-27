
let num1 = 0.7; //number
let num2 = 0.1; //number

num1 = ((num1 * 100) + (num2 * 100)) / 100; //isso tambem resolver

num1 = parseFloat(num1.toFixed(2)); // resolver problemas com pontos flutuantes

// IEEE 754-2008 causa imprecisao nos numero flutuantes

console.log(num1);

//console.log(num1.toString() + num2);
//onsole.log(num1 * num2);

//console.log(typeof num1)
//console.log(num1.toString(2)); //binario
//console.log(num1.toFixed(2)); //fixa casas decimais
//console.log(Number.isInteger(num1)); //Retorna se o numero é inteiro
//let temp = num1 * 'ola';
//console.log(Number.isNaN(temp)); //retorna se nao é um numero NaN= not a number