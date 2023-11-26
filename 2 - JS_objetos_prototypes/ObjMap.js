const pessoas = [
    {id: 1, nome: 'Carlos'},
    {id: 2, nome: 'Pedro'},
    {id: 3, nome: 'Ana'}
]

const numeros = [1, 15, 44, 89, 56]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

for (const n of numeros) {
    console.log(n)
}

console.log(novasPessoas)