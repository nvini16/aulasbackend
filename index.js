const express = require('express'); // importando o negocio do express

const app = express(); // iniciar o negocio do servodor

const porta = 3000;

app.get('/', (req, res) => {
    res.json({nome: "Ta rodando, fiote!"})
})

app.get('/turma', (req, res) => {
    res.json({
        sala: "3º ano B - Desenvolvimento de Sistemas",
        escola: "E.E Marlene Leite da Silva",
        periodo: "Técnico (PEI)",
        totalAlunos: 24
    })
})

//app.get('/')

app.get('/lanche/:dia', (req, res) => {
    const diaSemana = req.params.dia.toLowerCase();

    if(diaSemana === "segunda") {
        res.json({
            prato: "Comer Marsali"
        })
    } else if(diaSemana === "sexta") {
        res.json({
            prato: "Comer Marsali sem Camisinha"
        })
    } else {
        res.json({
            prato: "Comer Mrsali sem Lumbrificante"
        })
    }
})

app.listen(porta, () => {
    console.log("Servidor inicializado na porta: " + porta);
})