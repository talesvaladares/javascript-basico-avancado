const nums = [1,2,3,4];

const dobro = n => n * 2;

//console.log(nums.map(dobro));

const carrinho = [
  {nome: 'caneta', quantidade: 10, preco: 7.99},
  {nome: 'impressora', quantidade: 0, preco: 649.5},
  {nome: 'caderno', quantidade: 4, preco: 27.99},
  {nome: 'lapis', quantidade: 3, preco: 5.53},
  {nome: 'tesoura', quantidade: 1, preco: 19.53},
];

const getNome = item => item.nome;
const getTotal = item => item.quantidade * item.preco;

// console.log(carrinho.map(getNome));

// console.log(carrinho.map(getTotal));

Array.prototype.meuMap = function(fn) {

  const mapped = []

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    mapped.push(result)
  }
  return mapped;
 
}

console.log(carrinho.meuMap(getNome));

console.log(carrinho.meuMap(getTotal));