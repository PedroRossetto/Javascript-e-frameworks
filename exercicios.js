/* 
Função que recebe um numero e retorne o seguinte

Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é disiviel por 3 e 5 = FizzBuzz
Não é divisivel por 3 e 5 = Reporta o proprio numero
Checar se o numero é um numero = Retorna o proprio numero
Use a funcao com loop de numeros de 0 a 100
*/

function divisivel (x) {
    var x;
    if (x % 5 === 0 && x % 3 === 0) {
        return("FizzBuzz")
    } else if (x % 5 === 0) {
        return("Buzz")
    } else if (x % 3 === 0) {
        return("Fizz")
    } else {
        return(x)
    }
}

let rand = 1;

while (rand !== 100) {
    console.log(rand, divisivel(rand))
    rand++;
}