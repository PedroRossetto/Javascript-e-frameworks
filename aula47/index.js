// switch e case

function getDiaSemanaTexto(diaSemana) {

    let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda";
      break;
    case 2:
      diaSemanaTexto = "Terça";
      break;
    case 3:
      diaSemanaTexto = "Quarta";
      break;
    case 4:
      diaSemanaTexto = "Quinta";
      break;
    case 5:
      diaSemanaTexto = "Sexta";
      break;
    case 6:
      diaSemanaTexto = "Sabádo";
      break;
    default:
      diaSemanaTexto = "";
      break;
  }

  return diaSemanaTexto;
}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);