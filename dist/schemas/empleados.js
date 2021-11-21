"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajadores = void 0;
const mongoose_1 = require("mongoose");
const empleSchema = new mongoose_1.Schema({
    _idemp: {
        type: Number
    },
    _nombreemp: {
        type: String
    },
    _apellido: {
        type: String
    },
    _contacto: {
        type: Number
    },
    _puesto: {
        type: String
    },
    _idpaciente: {
        type: Array
    },
    _sueldo: {
        type: Number
    },
    _especialidad: {
        type: String
    },
    _segundoIdioma: {
        type: String
    }
});
exports.Trabajadores = (0, mongoose_1.model)('empleados', empleSchema);
