const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá Mundo')
})

app.get('/contato', (req, res) => {
    res.send('<h1>Obrigado por entrar em contato</h1>')
})

app.listen(3000, () => {
    console.log('Server rodando')
    console.log('http://localhost:3000')
})
