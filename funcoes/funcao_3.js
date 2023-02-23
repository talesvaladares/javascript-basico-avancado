const teste = () => console.log('teste');

const saudacao = (nome) => `Fala ${nome}!!`

console.log(saudacao('tales'));

//recebe sempre a mesma quantidade de parametros
const somar = numeros => {
  let total = 0;

  for(let n of numeros) {
    total += n;
  }
  return total;
}

//recebe qualquer quantidade de parametros
const somar2 = (...numeros) => {
  let total = 0;

  for(let n of numeros) {
    total += n;
  }
  return total;
}

console.log(somar([1, 2, 3, 4]))
console.log(somar2(1, 2, 3, 4, 6))
console.log(somar2(1, 2, 3, 4, 6, 7))