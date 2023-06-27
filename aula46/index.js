// objeto date
/* const tresHoras = 60 * 60 * 3 * 1000; //milisegundos
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); */


/*const data = new Date('2019-04-20 20:20:59'); //ano, mes(-1), dia, hora, minuto, segundo, milesimo de segundo
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); //mes começa no 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(data.toString());

console.log(Date.now()); */

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; //funcao faz ficar com 2 casas
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);