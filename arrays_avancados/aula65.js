const numeros = [12, 5, 9, 20, 8, 2, 1, 12, 4, 7, 89, 55]

// function callBackFilter(valor) {
//     return valor > 10
// }

const numerosFilter = numeros.filter((valor, indice) => {
    console.log(indice)
    return valor > 10
})

console.log(numerosFilter)