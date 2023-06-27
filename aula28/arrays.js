// lista, coleção de coisas

            //0123465789...
const nome = 'Pedro Arthur'
                // 0       1       2
const alunos = ['Luiz', 'Maria', 'Joao'];

console.log(alunos);
console.log(alunos[0]);

alunos[0] = 'Eduardo'; //altera
console.log(alunos[0]);

alunos[3] = 'Luiza';
alunos[alunos.length] = 'Joãozao'; //adiciona no fim
console.log(alunos.length);  // mostra quantos arrays tem
alunos.push('Jericó'); //adiciona no final
alunos.unshift('Pedrito'); //adiciona no começo e empurra os outros no array
alunos.pop(); // exclui o ultimo no array
const removido = alunos.pop(); //armareza o exclui em uma variavel
console.log(alunos);
const outroremovido = alunos.shift(); //excluir o primeiro
console.log(removido);
console.log(outroremovido);

delete alunos[0]; //deleta mas deixa um espaço vazio no indice selecionado
console.log(alunos);

console.log(alunos.slice(0, 2)); //corta o arrays
