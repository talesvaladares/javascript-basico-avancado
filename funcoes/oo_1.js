//função construtora
function Produto(nome, preco, desc = 0.15) {
  this.nome = nome
  this.preco = preco
  this.desc = desc

  this.precoFinal = () => {
    return this.preco * (1 - this.desc)
  }

}