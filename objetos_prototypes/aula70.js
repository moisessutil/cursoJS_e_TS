// const pessoa = {
//     nome: 'João',
//     sobrenome: 'Silva'
// }

// delete pessoa.nome
// const pessoa = new Object()
// pessoa.nome = 'Pedro'
// pessoa.sobrenome = 'Silva'
// pessoa.idade = 27


// console.log(pessoa)

// for (let chave in pessoa) {
//     console.log(chave)
// }

// factory function / constructor function

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Jão', 'Silva')
// console.log(p1.nomeCompleto())

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Carlos', 'Alberto')
Object.freeze(p1)
console.log(p1)