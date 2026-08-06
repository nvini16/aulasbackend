const express = require('express')
const app = express();

app.use(express.json())

// let estoque = ["Camisinha que brilha no escuro", "Camisinha que não brilha no escuro", "Azul"]

let estoque = [
    {nome: "Lapis", valor: 1.40, quantidade: 25},
    {nome: "Console de Plástico", valor: 10.00, quantidade: 2},
    {nome: "Sensor de palhaço azul", valor: 7.000, quantidade: 23}
]

const porta = 3000;

app.get('/produtos', (req, res) => {
    res.json(estoque)
} )

app.post('/produtos', (req, res) => {
    const novoProduto = req.body;

    estoque.push(novoProduto)

    res.send("Produto: " + novoProduto.nome + " cadastrado parceiro!")
});


app.listen(porta, () => {
    console.log("Ta rodando na porta " + porta + " meu parceiro!")
})