//Instalar o express e dar require em cada projeto que for ser criado;
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Olá mundo!"));
app.get('/contatos', (req, res) => res.send({nome: "Leandro", idade: 29}));
//criando um servidor

app.listen(3000, () => console.log("Servidor rodando"));