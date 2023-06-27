const elementos = [
    { tag: 'p', texto: 'JOOOJ' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
  ];
  
  function criaElemento(tagName, texto) {
    const elemento = document.createElement(tagName);
    elemento.innerText = texto;
    return elemento;
  }
  
  const container = document.getElementById('container');
  
  for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const elemento = criaElemento(tag, texto);
    container.appendChild(elemento);
  }
  
