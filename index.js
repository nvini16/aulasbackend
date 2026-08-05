const express = require('express');
const app = express();
const porta = 3300
const produtos = [
    {id: 1, nome: "Teclado", valor: 129.99
    },

    {id: 2, nome: "Monitor", valor: 300.00
    }
]

console.log(produtos[1].nome)
console.log("=====================================================")
produtos.push({id: 3, nome: "Sacola", valor: 1000.50
})
// console.log(produtos)


for (let index = 0; index < produtos.length; index++) {
    const produto = produtos[index]
    
    if(produto.id === 3) {
        console.log(produto)
    }
    
}

// procurarProduto(3)

function procurarProduto(id) {
    for (let index = 0; index < produtos.length; index++) {
        const produto = produtos[index]
        
        if(produto.id === id) {
            console.log(produto)
        }
        
    }
}





app.get('/test', (req, res) => {
    res.send("Olá, mundo!")
})

app.get('/produto/:id', (req, res) => {
    if(!parseInt(req.params.id)) {
        res.send("Valor do id deve ser numerico")
    }
    const id = parseInt(req.params.id);

    procurarProduto(id)
    res.send("Oiiiiiii")
})

// TECLADO
app.get('/teclado', (req, res) => {
    console.log(produtos[1].nome)

})

app.listen(porta, () => {
    console.log("Servidor iniciado na porta: " + porta)
} )