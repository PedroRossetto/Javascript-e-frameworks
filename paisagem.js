
//modo normal
function ePaisagem (largura, altura) {
    if (largura > altura){
        return true
    }
    return false 
}

//arrow function
const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1000, 400))
console.log(ePaisagem(100, 400))