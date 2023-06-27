// Escreva uma funcao que recebe 2 numeros e retorne o maior deles

 function maiorNumero (x, y) {
    var x;
    var y;
    if (x < y) {
        return y;
    }
    return x;
    
 }

 const max = (x, y) => {
    return x > y ? x : y;
 };


 console.log(max(50, 10));
 console.log(maiorNumero(15, 7));