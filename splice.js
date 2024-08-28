// Adicionar elementos
  let frutas = ["maçã", "laranja"];
  console.log(frutas);
  frutas.splice(1, 0, "banana"); // Adiciona "banana" no índice 1
  console.log("splice(1,0,'banana')");
  console.log(frutas); // ["maçã", "banana", "laranja"]
// Remover elementos
  frutas.splice(2, 1); // Remove 1 elemento a partir do índice 2
  console.log("splice(1,0)");
  console.log(frutas); // ["maçã", "banana"]
