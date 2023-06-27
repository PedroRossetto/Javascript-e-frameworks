// objetos

//const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
 //  idade: 25 

 function criaPessoa (nome, sobrenome, idade) { //funcao factory, cria objetos
    return {nome, sobrenome, idade};
 }

 const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
 const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
 const pessoa3 = criaPessoa('Joao', 'Moreira', 55);
 const pessoa4 = criaPessoa('Junior', 'Lara', 44);
 /* const pessoa5 = criaPessoa('Jean', 'Otavio', 69);
 */
 console.log(pessoa1.nome, pessoa2.idade, pessoa4.sobrenome);
 
/////////////////////////////////////////////////////////////////////////////

 const people1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} está falando oi..., sua idade é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
 };

 people1.fala();
 people1.incrementaIdade();
 people1.fala();
 people1.incrementaIdade();
 people1.fala();
 people1.incrementaIdade();
 people1.fala();
 people1.incrementaIdade();
 people1.fala();
 people1.incrementaIdade();
 people1.fala();