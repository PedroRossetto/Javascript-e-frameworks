/* 

Primitivos(imutaveis) - String, number, boolean, undefined, null(bigint, symbol)
*/
let nome = 'Luiz';
nome = 'Otavio';
console.log(nome);

/*
let a = 'A';
let b = a;
console.log(a, b);
                    //valor de a só modifica na primeira vez, faz um cópia
a = 'Outro valor';
console.log(a, b);
*/
// valores nao primitivos - referencia (mutavel) - Array, object, fuction - Valores passados por referencia

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b); 


// como contornar essa situação caso precise?

let c = [1, 2, 3, 4]
let d = [...c];
let e = [...d];   //com isso (c, e) copiam os valores ao inves de referenciar/ tomar base em outro

d.pop();
console.log(c, d, e);  //isso funciona para os outros valores mutaveis também, quase mesma coisa 3 pontos + simbolo
