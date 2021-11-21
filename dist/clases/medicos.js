"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
const empleados_1 = require("./empleados");
class Medico extends empleados_1.Empleado {
    constructor(id, nombreemp, apellido, contacto, puesto, especialidad, sueldo) {
        super(id, nombreemp, apellido, contacto, puesto, sueldo);
        this._especialidad = especialidad;
        this._idpaciente = new Array();
    }
    get sueldo() {
        return this._sueldo;
    }
    get especialidad() {
        return this._especialidad;
    }
    get idpaciente() {
        return this._idpaciente;
    }
    salario() {
        let salario;
        salario = super.sueldo;
        if (this._especialidad == "cirujano") {
            salario += 850 + salario;
        }
        else if (this._especialidad == "oftalmologo") {
            salario += 500 + salario;
        }
        else if (this._especialidad == "traumatologo") {
            salario += 300 + salario;
        }
        else if (this._especialidad == "ginecologo") {
            salario += 400 + salario;
        }
        else if (this._especialidad == "otorrino") {
            salario += 300 + salario;
        }
        else if (this._especialidad == "cardiovascular") {
            salario += 700 + salario;
        }
        else if (this._especialidad == "neurologo") {
            salario += 750 + salario;
        }
        else if (this._especialidad == "pediatra") {
            salario += 650 + salario;
        }
        else {
            salario == 1150;
        }
        return salario;
    }
}
exports.Medico = Medico;
