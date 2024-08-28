// Sem função de comparação 
let numeros = [3, 1, 4, 2];
console.log(numeros.sort()); // [1, 2, 3, 4] (ordem alfabética)
//Com função de comparação:
console.log(numeros.sort((a, b) => b - a)); // [4, 3, 2, 1] (ordem decrescente)
