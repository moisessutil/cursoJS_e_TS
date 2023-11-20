// const numeros = [12, 5, 9, 20, 8, 2, 1, 12, 4, 7, 89, 55]

// const total = numeros.reduce((acumulador, valor) => {
//     if (valor % 2 === 0) acumulador.push(valor)
//     return acumulador
// }, [])

// console.log(total)

const pessoas = [
    {nome: 'Carlos', idade: 55},
    {nome: 'Maria', idade: 32},
    {nome: 'Pedro', idade: 20},
    {nome: 'Jão', idade: 15},
    {nome: 'Julia', idade: 19},
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
})

console.log(pessoaMaisVelha)