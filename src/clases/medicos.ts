import {Empleado} from "./empleados";
import { Paciente } from "./pacientes";

export class Medico extends Empleado{
    private _especialidad: string;
    private _idpaciente: Array<Paciente>;
    constructor(id:number, nombreemp:string, apellido:string, contacto: number, puesto:string, especialidad:string, sueldo:number){
    super (id, nombreemp, apellido, contacto, puesto, sueldo)
    this._especialidad = especialidad
    this._idpaciente = new Array<Paciente>()
    }
    get sueldo (){
        return this._sueldo
    }
    get especialidad (){
        return this._especialidad
    }
    get idpaciente() {
        return this._idpaciente
    }

    salario(){
        let salario : number;
        salario = super.sueldo;
        if (this._especialidad == "cirujano"){
            salario += 850 + salario
        } else if (this._especialidad == "oftalmologo"){
            salario += 500 + salario
        } else if (this._especialidad == "traumatologo"){
            salario += 300 + salario
        } else if (this._especialidad == "ginecologo"){
            salario += 400 + salario
        } else if (this._especialidad == "otorrino"){
            salario += 300 + salario
        } else if (this._especialidad == "cardiovascular"){
            salario += 700 + salario
        } else if (this._especialidad == "neurologo"){
            salario += 750 + salario
        } else if (this._especialidad == "pediatra"){
            salario += 650 + salario
        } else {
            salario == 1150
        }
        return salario
    }
}