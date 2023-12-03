const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escrever = require('./modulo/escrever')
const ler = require('./modulo/ler')

// const pessoas = [
//     {nome: 'Carlos'},
//     {nome: 'Pedro'},
//     {nome: 'Jão'},
// ]

// const json = JSON.stringify(pessoas, '', 2)
// escrever(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val))
}

lerArquivo(caminhoArquivo)