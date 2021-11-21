"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Covid = void 0;
const pacientes_1 = require("./pacientes");
class Covid extends pacientes_1.Paciente {
    constructor(id, nombre, apellido1, apellido2, edad, dni, seguro, telefono, dolencia, tipo, test, preciobase) {
        super(id, nombre, apellido1, apellido2, edad, dni, seguro, telefono, dolencia, tipo, preciobase);
        this._test = test;
    }
    get test() {
        return this._test;
    }
    get precioBase() {
        return this._preciobase;
    }
    get seguro() {
        return this._seguro;
    }
    pago() {
        let pago;
        pago = super.pago();
        if (this._seguro == false) {
            if (this._test == 'antigeno') {
                pago += 50 + pago;
            }
            else if (this._test == 'PCR') {
                pago += 90 + pago;
            }
            else if (this._test == 'serologico') {
                pago += 45 + pago;
            }
        }
        else {
            pago = 0;
        }
        return pago;
    }
}
exports.Covid = Covid;
