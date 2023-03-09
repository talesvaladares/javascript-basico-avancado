//uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efeitos colaterais observaveis

let quantidadeDeExecucoes = 0;

function somar(a, b) {
  quantidadeDeExecucoes++; //efeitos colaterais observaveis
  return a + b;
}

console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));