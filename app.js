//Instalar o express e dar require em cada projeto que for ser criado;
const express = require('express');
const app = express();

app.get('/usuario', (req, res) => res.send("Olá mundo!"));
app.post('/usuario', (req, res) => res.send({nome: 'Leandro', sobrenome: 'Furtado'}));
app.put('/usuario:id', (req, res) => res.send({nome: 'Furtado', sobrenome: 'Leandro'}));
app.delete('/usuario:id', deleteUsuario, (req, res) => {
    const { id } = req.params;
});
//criando um servidor

app.listen(3000, () => console.log("Servidor rodando"));