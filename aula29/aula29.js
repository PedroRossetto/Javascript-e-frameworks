const raiz = function (n) { //outra maneira de criar funcao, mas anonimas
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(33));

const raiz2 = (n) => n ** 0.5;  //arrow fucntion

console.log(raiz2(8));
console.log(raiz2(50));  // sempre fazer funcoes expecificas, que façam poucas coisas com pouco codigo
console.log(raiz2(100));
console.log(raiz2(40));