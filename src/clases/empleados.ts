import { Paciente } from "./pacientes";

export class Empleado {
    private _id: number;
    private _nombreemp: string;
    private _apellido: string;
    private _contacto: number;
    private _puesto: string;
    protected _sueldo: number;
    constructor(id:number, nombreemp:string, apellido:string, contacto: number, puesto: string, sueldo:number){
        this._id = id;
        this._nombreemp = nombreemp;
        this._apellido = apellido;
        this._contacto = contacto;
        this._puesto = puesto;
        this._sueldo = sueldo;

    }
    get id(){
        return this._id;
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
    get puesto() {
        return this._puesto;
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
        return `IdEmpleado: ${this._id},Nombre${this._nombreemp},Apellido${this._apellido},Telefono${this._contacto} Sueldo: ${this._sueldo}`
    }
}               