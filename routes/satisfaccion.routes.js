var express = require('express');
var UsuarioController = require('../controllers/satisfaccion.controller');
var api = express.Router();

api.get('/sat/:id',UsuarioController.getSatisfaccion);
api.get('/sats',UsuarioController.getSatisfaccions);
api.post('/sat',UsuarioController.saveSatisfaccion);
api.put('/sat/:id',UsuarioController.updateSatisfaccion);
api.delete('/sat/:id',UsuarioController.deleteSatisfaccion);
module.exports = api;