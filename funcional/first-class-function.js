//diz-se que uma linguagem de programação possui
//funções de primeira classe quando funções nessa
//linguagem são tratadas como qualquer outra variavel

const x = 3;
const y = function(texto){
  return (`Esse é o texto ${texto}`)
}

console.log(x)
console.log(y('Olá'))