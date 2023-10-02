const express = require("express")
const app = express()

app.get('/', (requisicao,resposta) => {
    resposta.send("seja bem vindo ao servidor!!")
})

app.listen(3001, () => {
    console.log("Servidor na porta 3000")
})