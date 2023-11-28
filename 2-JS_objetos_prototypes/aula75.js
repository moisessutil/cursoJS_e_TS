// const objA = {
//     chaveA: 'A'
// }

// const objB = {
//     chaveB: 'B'
// }

// const objC = new Object()
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objB.chaveA)
// console.log(objC.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desonto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100))
}

Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100))
}

const p2 = {
    nome: 'Copo',
    preco: 10
}

const p1 = new Produto('Calça', 39)
p1.desonto(30)
p1.aumento(50)
Object.setPrototypeOf(p2, p1)
p2.aumento(89)
console.log(p1)
console.log(p2)