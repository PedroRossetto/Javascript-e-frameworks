const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2){
        console.log('Pulei o numero 2')  /// continue vai pular e depois continuar
        continue;
    }

    if (numero === 7) {
        break;                  // break vai pular e sai, nao mostra mais nada no laço
    }


    console.log(numero);

}
