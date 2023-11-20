function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configuravel
    })
}

const p1 = new Produto('Camiseta', 35, 10)
p1.estoque = 80
console.log(Object.keys(p1))