const readline = require('readline');

function obterResposta(resposta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp)
    })
  })
}

obterResposta("Este é um teste?").then(response => {
  console.log(response);
})