const readline = require('readline');

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp);
      rl.close();
    })
  });
}

//observer
function namorada() {
  console.log('N: Apagar as luzes...');
  console.log('N: Pedir silência...');
  console.log('N: Surpresa');
}

//observer
function sindico() {
  console.log('S: Monitorando o barulho!');
}

//subject
async function porteiro(...interessados) {
  while(true) {
    const resp = await obterResposta('O namorado chegou? (s/N/q)')

    if (resp.toLowerCase() === 's') {
      //os observadores são notificados
      (interessados || []).forEach(obs => obs());
    }else if (resp.toLowerCase() === 'q') {
      break;
    }
  }
}

//registrei dois observadores, namorada e sindico
//o porteiro é o subject
porteiro(namorada, sindico) ;