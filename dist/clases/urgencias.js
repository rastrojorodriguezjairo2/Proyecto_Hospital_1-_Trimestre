"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Urgencias = void 0;
const pacientes_1 = require("./pacientes");
class Urgencias extends pacientes_1.Paciente {
    constructor(id, nombre, apellido1, apellido2, edad, dni, seguro, telefono, dolencia, prueba, tipo, preciobase) {
        super(id, nombre, apellido1, apellido2, edad, dni, seguro, telefono, dolencia, tipo, preciobase);
        this._prueba = prueba;
    }
    get prueba() {
        return this._prueba;
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
            if (this._prueba == 'rayos x') {
                pago += 30 + pago;
            }
            else if (this._prueba == 'resonancia') {
                pago += 35 + pago;
            }
            else if (this._prueba == 'tac') {
                pago += 40 + pago;
            }
            else if (this._prueba == 'traumatologia') {
                pago += 45 + pago;
            }
            else if (this._prueba == 'otorrino') {
                pago += 50 + pago;
            }
            else if (this.prueba == "ginecologia") {
                pago += 69 + pago;
            }
            else if (this._prueba == "oftalmologia") {
                pago += 56 + pago;
            }
            else if (this._prueba == 'operacion') {
                pago += 100 + pago;
            }
            else if (this._prueba == 'cardiovascular') {
                pago += 150 + pago;
            }
            else {
                pago = 80;
            }
        }
        else {
            pago = 0;
        }
        return pago;
    }
}
exports.Urgencias = Urgencias;
