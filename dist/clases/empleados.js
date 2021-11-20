"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(idemp, nombreemp, apellido, contacto, idpaciente, sueldo) {
        this._idemp = idemp;
        this._nombreemp = nombreemp;
        this._apellido = apellido;
        this._contacto = contacto;
        this._sueldo = sueldo;
        this._idpaciente = idpaciente;
    }
    get idemp() {
        return this._idemp;
    }
    get nombreemp() {
        return this._nombreemp;
    }
    get apellido() {
        return this._apellido;
    }
    get contacto() {
        return this._contacto;
    }
    get idpaciente() {
        return this._idpaciente;
    }
    get sueldo() {
        return this._sueldo;
    }
    salario() {
        let salario;
        salario = this._sueldo;
        salario = 1150;
    }
    todo() {
        return `IdEmpleado: ${this._idemp},Nombre${this._nombreemp},Apellido${this._apellido},Telefono${this._contacto} Sueldo: ${this._sueldo}`;
    }
}
exports.Empleado = Empleado;
