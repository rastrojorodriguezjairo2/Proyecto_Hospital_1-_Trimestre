"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrativo = void 0;
const empleados_1 = require("./empleados");
class Administrativo extends empleados_1.Empleado {
    constructor(id, nombreemp, apellido, contacto, puesto, segundoIdioma, sueldo) {
        super(id, nombreemp, apellido, contacto, puesto, sueldo);
        this._segundoIdioma = segundoIdioma;
    }
    get idioma() {
        return this._segundoIdioma;
    }
    salario() {
        let salario;
        salario = super.sueldo;
        if (this._segundoIdioma == "ingles" || this._segundoIdioma == "Ingles") {
            salario += 100 + salario;
        }
        else if (this._segundoIdioma == "frances" || this._segundoIdioma == "Frances") {
            salario += 200 + salario;
        }
        else if (this._segundoIdioma == "aleman" || this._segundoIdioma == "Aleman") {
            salario += 300 + salario;
        }
        else {
            salario == 1000;
        }
        return salario;
    }
}
exports.Administrativo = Administrativo;
