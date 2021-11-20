import {Empleado} from "./empleados";
import {Paciente} from "./pacientes";

export class Administrativo extends Empleado{
    private _segundoIdioma: string;
    constructor(idemp:number, nombreemp:string, apellido:string, contacto: number,segundoIdioma: string, sueldo:number ){
        super (idemp, nombreemp, apellido, contacto, sueldo)
        this._segundoIdioma = segundoIdioma;
    }
    get idioma(){
        return this._segundoIdioma
    }
    salario(){
        let salario : number;
        salario = super.sueldo;
        if (this._segundoIdioma == "ingles" || this._segundoIdioma == "Ingles"){
            salario += 100 + salario
        } else if (this._segundoIdioma == "frances" || this._segundoIdioma == "Frances"){
            salario += 200 + salario
        } else if (this._segundoIdioma == "aleman" || this._segundoIdioma == "Aleman"){
            salario += 300 + salario
        } else {
            salario == 1000;
        }
        return salario
    }
}