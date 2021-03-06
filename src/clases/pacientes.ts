import { Empleado} from "./empleados";
export class Paciente {
    private _id: number;
    private _nombre: string;
    private _apellido1: string;        
    private _apellido2: string;
    private _edad: number;
    private _dni: string;
    protected _seguro: boolean;
    private _telefono: number;
    private _dolencia: string;
    private _tipo: string;
    protected _preciobase: number;
constructor(id: number, nombre: string, apellido1: string, apellido2:string, edad: number, dni: string, seguro: boolean, telefono: number, dolencia: string, tipo:string, preciobase: number){
    this._id = id;
    this._nombre = nombre;
    this._apellido1 = apellido1;
    this._apellido2 = apellido2;
    this._edad = edad;
    this._dni = dni;
    this._seguro = seguro;
    this._telefono = telefono;
    this._dolencia = dolencia;
    this._tipo = tipo;
    this._preciobase = preciobase;
    }
get id(){
    return this._id;
}
get nombre(){
    return this._nombre;
}
get apellido1(){
    return this._apellido1;
}
get apellido2(){
    return this._apellido2;
}
get edad(){
    return this._edad;
}
get dni(){
    return this._dni;
}
get seguro(){
    return this._seguro;
}
get telefono(){
    return this._telefono;
}
get dolencia(){
    return this._dolencia;
}
get tipo(){
    return this._tipo;
}
get preciobase(){
    return this._preciobase;
}
    pago(): number{
        let pago: number;
        pago = this._preciobase;
        if (this._seguro == false){
            pago = 80;
        } else (
            pago = 0
        )
        return pago
    }
    todo() {
        return `id: ${this._id},Nombre${this._nombre},Apellido1${this._apellido1},Apellido2${this._apellido2},Edad${this._edad}, DNI${this._dni},Seguro${this._seguro},Telefono${this._telefono},Dolencia${this._dolencia},Tipo${this._tipo},Precio base: ${this._preciobase}`
    }
}