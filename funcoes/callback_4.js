const carrinho = [
  {nome: 'caneta', quantidade: 10, preco: 7.99},
  {nome: 'impressora', quantidade: 0, preco: 649.5},
  {nome: 'caderno', quantidade: 4, preco: 27.99},
  {nome: 'lapis', quantidade: 3, preco: 5.53},
  {nome: 'tesoura', quantidade: 1, preco: 19.53},
];

const quantidadeMaiorQueZero = item => item.quantidade > 0;

const itensValidos = carrinho.filter(quantidadeMaiorQueZero);
console.log(itensValidos)

Array.prototype.meuFilter = function(fn) {

  const filter = []

  for (let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      filter.push(this[i])
    }
    
  }
  return filter;
 
}

const itensValidos2 = carrinho.meuFilter(quantidadeMaiorQueZero);
console.log(itensValidos2)