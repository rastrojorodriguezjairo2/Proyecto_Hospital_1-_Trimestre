import {Schema, model } from 'mongoose'
import { Paciente } from '../clases/pacientes'
import { Empleado } from './../clases/empleados'

const empleSchema = new Schema({
    _idemp: {
        type: Number
      },
    _nombreemp: {
        type: String
      },
    _apellido: {
        type: String
      },
    _contacto: {
        type: Number
      },
    _idpaciente: {
        type: Array
    },
    _sueldo: {
        type: Number
    },
    _especialidad: {
      type: String
    },
    _idiomas: {
        type: String
    }
})

export type empl = {
    _idemp: number | null,
    _nombreemp: string | null,
    _apellido: string | null,
    _contacto: number | null,
    _idpaciente: Array<Paciente> | null,
    _especialidad: string | null,
    _sueldo: number | null
}

export type medi = {
    _idemp: number | null,
    _nombreemp: string | null,
    _apellido: string | null,
    _contacto: number | null,
    _idpaciente: Array<Paciente> | null,
    _sueldo: number | null
}

export type admin = {
    _idemp: number | null,
    _nombreemp: string | null,
    _apellido: string | null,
    _contacto: number | null,
    _idiomas: string | null,
    _sueldo: number | null
}

export const Trabajadores = model('empleados', empleSchema)