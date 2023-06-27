let varA = "A";  // b
let varB = "B";  // c
let varC = "C";  // a

let varD = varA
varA = varB;
varB = varC;
varC = varD;



console.log(varA, varB, varC);