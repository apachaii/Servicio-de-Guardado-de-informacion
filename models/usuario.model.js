'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    Pregunta: String,
    Respuesta: String,
    Carrera: String,
    Seccion: String,
    Agente: String,
    Intencion: String,
    Rut: String
 //satisfaccion
});

module.exports = mongoose.model('Usuario', UsuarioSchema)