function textComTamanhoentre(min) {

  return function(max) {
    return function(erro) {
      return function(texto) {
        //lazy evaluation
        const tamanho = (texto || '').trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  } 
}

const forcarTamanhoPadrao = textComTamanhoentre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome  produto inválido')

const p1 = {nome: 'a', preco: 13.99, desc: 0.25}
forcarNomeProdutoValido(p1.nome)