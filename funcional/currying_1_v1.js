function textComTamanhoentre(min, max, erro, texto) {
  const tamanho = (texto || '').trim().length;

  if (tamanho < min || tamanho > max) {
    throw erro
  }
}

const p1 = {nome: 'a', preco: 13.99, desc: 0.25}
textComTamanhoentre(4, 244, 'Nome inválido', p1.nome)