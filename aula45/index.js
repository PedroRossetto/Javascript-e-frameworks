// operação ternária  ?:

const pontuacaoUsuario = 1000;
//                                    CONDIÇÃO    VERDADEIRO      FALSO
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Padrão';

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(nivelUsuario);



