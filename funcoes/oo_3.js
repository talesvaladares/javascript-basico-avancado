//função construtora
function Produto(nome, preco, desc = 0.15) {
  this.nome = nome
  this.preco = preco
  this._desc = desc

  this.precoFinal = () => {
    return this.preco * (1 - this._desc)
  }

}

Produto.prototype.log = function() {
  console.log(`Nome: ${this.nome} Preco: R$${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
  get: function () {
    return this._desc
  },
  set: function(desc) {
    if (desc >= 0 && desc <= 1) {
      this._desc = desc
    }
  }
})

Object.defineProperty(Produto.prototype, 'descString', {
  get: function () {
    return `${this._desc * 100}%`
  }
})

const produto = new Produto('Geladeira', 3000);
console.log(produto.preco)
console.log(produto.precoFinal())
console.log(produto.desc)
console.log(produto.descString)
produto.desc = 0.99
produto.log()