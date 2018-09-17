var express = require('express');
var UsuarioController = require('../controllers/usuario.controller');
var api = express.Router();

api.get('/prueba/:nombre?',UsuarioController.prueba);
api.get('/user/:id',UsuarioController.getUsuario);
api.get('/users',UsuarioController.getUsuarios);
api.post('/user',UsuarioController.saveUsuario);
api.put('/user/:id',UsuarioController.updateUsuario);
api.delete('/user/:id',UsuarioController.deleteUsuario);
module.exports = api;