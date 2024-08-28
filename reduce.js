let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
let soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
console.log("Retorna a soma de todos os elementos do vetor");
console.log(soma); // 10
