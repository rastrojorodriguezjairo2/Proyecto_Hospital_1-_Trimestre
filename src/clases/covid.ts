import {Paciente} from './pacientes';
import { Empleado} from "./empleados";

export class Covid extends Paciente {
    private _test: string;
    constructor(id: number, nombre: string, apellido1: string, apellido2:string, edad: number, dni: string, seguro: boolean, telefono: number, dolencia: string, test: string,preciobase: number)
    {
    super (id, nombre, apellido1, apellido2, edad, dni, seguro, telefono, dolencia, preciobase)
    this._test = test;
    }
    get test (){
        return this._test;
    }
    get precioBase(){
        return this._preciobase;
    }
    get seguro(){
        return this._seguro;
    }
    pago(): number{
        let pago: number;
        pago = super.pago();
        if (this._seguro == false){
            if (this._test == 'antigeno'){
                pago += 50 + pago;
            } else if(this._test == 'PCR'){
                pago += 90 + pago
            } else if (this._test == 'serologico'){
                pago += 45 + pago
            } 
        } else {
            pago = 0
        }
        return pago
    }
}