class Produtor {

  constructor(nome, preco, desc = 0.5) {
    this.nome(nome);
    this.preco(preco)
    this.desc = desc;
  }

  get precoFinal () {
    return this.preco * (1 - this.desc);
  }

  set preco(preco) {
    if (preco >= 0) {
      this._preco = preco
    } 
  }

  get preco() {
    return this._preco
  }

  get nome () {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome.toUpperCase();
  }
}