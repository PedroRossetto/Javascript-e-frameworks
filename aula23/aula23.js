// aula sobre string :)
//               0123456789...
let umaString = "Um texto \\qualquer";
console.log(umaString);
console.log(umaString[4]); //puxa a letra na posição
console.log(umaString.charAt(6)); // mesma coisa, mas se sair dos numero vem com numero vazio
console.log(umaString.concat(' ', 'em', ' ', 'um')); // concatena, mas de um jeito ruim, melhor usar o sinal de +
console.log(`${umaString} em dois lindos dias`)
console.log(umaString.replace('Um', 'Outro')); // muda uma palavra por outra
console.log(umaString.length) //mostra quantas letra tem

console.log(umaString.slice(3, 8)); //pega um parte que selecionar no indice
