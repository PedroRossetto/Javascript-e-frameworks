const nome = ['Luiz', 'Otavio', 'Henrique'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);           // arrays e strings
}

console.log('#### ', "\n")

for (let i in nome) {               //Retorna indice ou chave, string, arrays e objetos
    console.log(nome[i]); 
}
// "\n" quebra a libra
console.log('#### ', "\n")

for (let valor of nome) {
    console.log(valor);         //só retorna o valor só funciona com iteraveis(que tem indice) array ou string
}

console.log('#### ', "\n")

nome.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
}); 