const numeros = [12, 5, 9, 20, 8, 2, 1, 12, 4, 7, 89, 55]

const pessoas = [
    {nome: 'Carlos', idade: 55},
    {nome: 'Maria', idade: 32},
    {nome: 'Pedro', idade: 20},
    {nome: 'Jão', idade: 15},
    {nome: 'Julia', idade: 19},
]

// const numerosDobro = numeros.map((valor) => {
//     return 2 * valor
// })

// console.log(numerosDobro)

// const nomes = pessoas.map(obj => obj.nome)
// const idades = pessoas.map((obj) => {
//     delete obj.nome
//     return obj
// })

const comIds = pessoas.map((obj, indices) => {
    obj.id = indices
    return obj
})


// console.log(nomes)
// console.log(idades)
console.log(comIds)