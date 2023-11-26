// const numeros = [12, 5, 9, 20, 8, 2, 1, 12, 4, 7, 89, 55]

// // function callBackFilter(valor) {
// //     return valor > 10
// // }

// const numerosFilter = numeros.filter((valor, indice) => {
//     console.log(indice)
//     return valor > 10
// })

// console.log(numerosFilter)

const pessoas = [
    {nome: 'Carlos', idade: 55},
    {nome: 'Maria', idade: 32},
    {nome: 'Pedro', idade: 20},
    {nome: 'Jão', idade: 15},
    {nome: 'Julia', idade: 19},
]

const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length >= 5
})

console.log(pessoasComNomeGrande)

const pessoasComMaisTrinta = pessoas.filter(obj => obj.idade >= 30)

console.log(pessoasComMaisTrinta)

const pessoasTerminaComA = pessoas.filter(function(obj) {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(pessoasTerminaComA)