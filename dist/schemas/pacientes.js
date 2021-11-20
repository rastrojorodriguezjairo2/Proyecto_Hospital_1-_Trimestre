"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacientes = void 0;
const mongoose_1 = require("mongoose");
const pacienteSchema = new mongoose_1.Schema({
    _id: {
        type: Number
    },
    _nombre: {
        type: String
    },
    _apellido1: {
        type: String
    },
    _apellido2: {
        type: String
    },
    _edad: {
        type: Number
    },
    _dni: {
        type: String
    },
    _seguro: {
        type: Boolean
    },
    _telefono: {
        type: Number
    },
    _dolencia: {
        type: String
    },
    _preciobase: {
        type: Number
    },
    _prueba: {
        type: String
    },
    _test: {
        type: String
    }
});
exports.Pacientes = (0, mongoose_1.model)('pacientes', pacienteSchema);
