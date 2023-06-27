const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: '30 '
};

for (let n in pessoa) {
    console.log(n, pessoa[n]);
} 