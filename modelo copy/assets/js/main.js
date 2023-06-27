const paragrafos = document.querySelector('.paragrafos'); //selecionando os paragrafos
const ps = paragrafos.querySelectorAll('p'); //selecionando todos os paragrafos (fazer um contador)

const estilosBody = getComputedStyle(document.body);  //pegando todos os estilos do body
const backgroundColorBody = estilosBody.backgroundColor  //pegando o backgroundColor do body


for (let p of ps) {     //ps só funciona como um contador aqui, paragrafos nao funcionaria por só pegar 1 elemento
    p.style.backgroundColor = backgroundColorBody;  //mudando o estilo do background
    p.style.color = '#ffff'; //mudando estilo da fonte
}

//cor do texto do paragrafo em branco e fundo cor do background do body40, 168, 207