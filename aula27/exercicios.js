// raiz quadrada, se é inteiro, se é NaN, arredondado pra baixo e cima, com duas casas decimais


let number1 = prompt('Digite um numero qualquer');
number1 = parseFloat(number1);
const numeroInicial = document.getElementById('numero');
numeroInicial.innerHTML = number1;
const texto = document.getElementById('texto');
texto.innerHTML = (`<p>Seu número + 2 é ${number1 + 2}</p>`);
const raizQ = (number1 ** 0.5)
document.body.innerHTML +=(`A raiz quadra de ${number1} é ${raizQ}<br>`);
document.body.innerHTML +=(`${Number.isInteger(number1)}<br>`);
document.body.innerHTML +=(`${Number.isNaN(number1)}<br>`);
document.body.innerHTML +=(`${Math.floor(number1)}<br>`);
document.body.innerHTML +=(`${Math.ceil(number1)}<br>`);
document.body.innerHTML +=(`Com duas casas decimais: ${number1.toFixed(2)}`);