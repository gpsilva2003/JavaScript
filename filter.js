let numeros = [1, 2, 3, 4];
console.log(numeros);
let pares = numeros.filter(function(num) {
  return num % 2 === 0;
});
console.log("Filtra os pares e gera um novo vetor");
console.log(pares); // [2, 4]
