// Cria um objeto de data
var dataAtual = new Date();

// Obtém as informações de data e hora
var diaDaSemana = dataAtual.getDay();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth();
var ano = dataAtual.getFullYear();
var hora = dataAtual.getHours();
var minuto = dataAtual.getMinutes();
var segundo = dataAtual.getSeconds();

// Cria uma string com a data e hora formatadas em português
var dataHoraFormatada = '';

switch (diaDaSemana) {
    case 0:
        dataHoraFormatada += 'Domingo';
        break;
    case 1:
        dataHoraFormatada += 'Segunda-feira';
        break;
    case 2:
        dataHoraFormatada += 'Terça-feira';
        break;
    case 3:
        dataHoraFormatada += 'Quarta-feira';
        break;
    case 4:
        dataHoraFormatada += 'Quinta-feira';
        break;
    case 5:
        dataHoraFormatada += 'Sexta-feira';
        break;
    case 6:
        dataHoraFormatada += 'Sábado';
        break;
}

dataHoraFormatada += ', ' + dia + ' de ';

switch (mes) {
    case 0:
        dataHoraFormatada += 'janeiro';
        break;
    case 1:
        dataHoraFormatada += 'fevereiro';
        break;
    case 2:
        dataHoraFormatada += 'março';
        break;
    case 3:
        dataHoraFormatada += 'abril';
        break;
    case 4:
        dataHoraFormatada += 'maio';
        break;
    case 5:
        dataHoraFormatada += 'junho';
        break;
    case 6:
        dataHoraFormatada += 'julho';
        break;
    case 7:
        dataHoraFormatada += 'agosto';
        break;
    case 8:
        dataHoraFormatada += 'setembro';
        break;
    case 9:
        dataHoraFormatada += 'outubro';
        break;
    case 10:
        dataHoraFormatada += 'novembro';
        break;
    case 11:
        dataHoraFormatada += 'dezembro';
        break;
}

dataHoraFormatada += ' de ' + ano + ' às ' + hora + ':' + minuto + ':' + segundo;
// Obtém o elemento HTML para exibir a data e hora
var elementoData = document.getElementById('data');

// Define o conteúdo do elemento HTML para a data e hora formatadas
elementoData.innerHTML = dataHoraFormatada;