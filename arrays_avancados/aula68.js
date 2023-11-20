const numeros = [12, 5, 9, 20, 8, 2, 1, 12, 4, 7, 89, 55]

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor)

console.log(numerosPares)