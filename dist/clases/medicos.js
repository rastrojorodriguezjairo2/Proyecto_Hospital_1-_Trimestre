"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medicos = void 0;
const empleados_1 = require("./empleados");
class Medicos extends empleados_1.Empleado {
    constructor(idemp, nombreemp, apellido, especialidad, contacto, idpaciente, sueldo) {
        super(idemp, nombreemp, apellido, contacto, idpaciente, sueldo);
        this._especialidad = especialidad;
    }
    get sueldo() {
        return this._sueldo;
    }
    get especialidad() {
        return this._especialidad;
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
        else {
            salario == 1150;
        }
        return salario;
    }
}
exports.Medicos = Medicos;
