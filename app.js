//Instalar o express e dar require em cada projeto que for ser criado;
const express = require('express');
const app = express();

//Rota para requisição de página /usuario
app.get('/usuario', (req, res) => res.send("Bem vindo usuario"));
//Rota para incluir um usuário
app.post('/usuario', (req, res) => res.send('Incluir um novo usuário'));
//Rota para atualizar um usuário
app.put('/usuario/:id', (req, res) => res.send(`Editar o usuario ${req.params.id}`));
//Rota para deletar um usuário
app.delete('/usuario/:id', (req, res) => res.send(`Excluir o usuario ${req.params.id}`));

app.listen(3000, () => console.log("Servidor rodando"));