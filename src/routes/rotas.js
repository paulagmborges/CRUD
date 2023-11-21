const express = require('express');

const  rotas = express();

const {
    cadastrarUsuario,
    login,
    buscarUsuario,
    
}= require('./controller/usuario')

const verificaLogin = require("./middleware/verificaLogin");

rotas.post('/usuario',cadastrarUsuario) 
rotas.post('/login',login)
rotas.use(verificaLogin)
rotas.get('/usuario',buscarUsuario)

module.exports = rotas