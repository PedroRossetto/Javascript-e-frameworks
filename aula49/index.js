const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

/* let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otavio'
    console.log(nome, nome2);

    if (verdadeira) {
        console.log('OK');
    }

}

console.log(nome, nome2) */



function falaOi() {
    var sobrenome = 16;
    return sobrenome;
}

let sobrenomeCompleto = falaOi();
console.log(sobrenomeCompleto);





//funcao nao deixa usar as variaveis criadas dentro

/* function falaOi() {
    var nome = 'Luiz';
    var sobrenome = 'Otavio';
    var sobrenome2 = 'Miranda';

    nomeCompleto = `${nome} ${sobrenome} ${sobrenome2}`;

    return nomeCompleto
}

falaOi();
console.log(nomeCompleto) */