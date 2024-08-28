const produtos = [
  { nome: 'Camiseta', preço: 20 },
  { nome: 'Calça', preço: 50 },
  { nome: 'Tênis', preço: 100 }
];

// Filtrar produtos com preço acima de 30 e calcular o preço total
const produtosCaros = produtos.filter(produto => produto.preço > 30);
const precoTotal = produtosCaros.reduce((total, produto) => total + produto.preço, 0);
console.log(produtos);
console.log("Filtra os mais caros e imprime o total");
console.log(produtosCaros);
console.log("Preço total:", precoTotal);
