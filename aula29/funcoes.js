//function saudacao(nome) {
//    return `Bom dia ${nome}!`; //faz com que a funcao retorno algum valor


//const variavel = saudacao('Luiz'); //funcao nao retorna nenhum valor desse jeito
//console.log(variavel);

function soma(x = 5, y = 2) {
    const resultado = x + y;
    return resultado; //nada dps de return é executado
}

console.log(soma(2, 2));
console.log(soma(25, 20));
console.log(soma(50, 75));
const resultado = soma(3, 3);
console.log(resultado);  
console.log(soma()); 