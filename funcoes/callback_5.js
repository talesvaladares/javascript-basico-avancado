const carrinho = [
  {nome: 'caneta', quantidade: 10, preco: 7.99},
  {nome: 'impressora', quantidade: 1, preco: 649.5},
  {nome: 'caderno', quantidade: 4, preco: 27.99},
  {nome: 'lapis', quantidade: 3, preco: 5.53},
  {nome: 'tesoura', quantidade: 1, preco: 19.53},
];

const valorTotal =  carrinho.reduce((acc, item) => {
  return acc + (item.quantidade * item.preco)
},0)

console.log(valorTotal);


Array.prototype.meuReduce = function(fn, inicial) {
  let acc = inicial;
  
  for(let i = 0; i < this.length; i++) {
    if(!acc && i === 0) {
      acc = this[i];
      continue;
    }
    else {
      acc = fn(acc, this[i], this);
    }

  }

  return acc;
}

const valorTotal2 =  carrinho.meuReduce((acc, item) => {
  return acc + (item.quantidade * item.preco)
},0)

console.log(valorTotal2);
