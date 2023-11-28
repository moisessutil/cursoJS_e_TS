/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Camiseta', preco: 39.90}
const outraCoisa = {...produto, material: 'MDF'}

produto.nome = 'Calça'
Object.defineProperty(produto, 'nome', {
    writable: false
})

// console.log(outraCoisa)
// console.log(produto)
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}