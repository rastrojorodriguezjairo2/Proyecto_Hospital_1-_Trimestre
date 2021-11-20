import { Paciente } from "./pacientes";

export class Empleado {
    private _idemp: number;
    private _nombreemp: string;
    private _apellido: string;
    private _contacto: number;
    protected _sueldo: number;
    constructor(idemp:number, nombreemp:string, apellido:string, contacto: number, sueldo:number){
        this._idemp = idemp;
        this._nombreemp = nombreemp;
        this._apellido = apellido;
        this._contacto = contacto;
        this._sueldo = sueldo;

    }
    get idemp(){
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
    get sueldo() {
        return this._sueldo;
      }
      salario(){
          let salario : number;
          salario = this._sueldo;
          salario = 1150;
      }
      todo() {
        return `IdEmpleado: ${this._idemp},Nombre${this._nombreemp},Apellido${this._apellido},Telefono${this._contacto} Sueldo: ${this._sueldo}`
    }
}               