'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SatisfaccionSchema = Schema({
    Comentario: String,
    Valoracion: Number,
    Comentario_NLU: Number,

});

module.exports = mongoose.model('Satisfaccion', SatisfaccionSchema)