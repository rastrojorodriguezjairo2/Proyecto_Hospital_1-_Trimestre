import {Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
    _id: {
      type: Number
    },
    _nombre: {
        type: String
      },
    _apellido1: {
        type: String
      },
    _apellido2: {
        type: String
      },
    _edad: {
        type: Number
      },
    _dni: {
        type: String
      },
    _seguro: {
        type: Boolean
      },
    _telefono: {
        type: Number
      },
    _dolencia: {
        type: String
      },
    _tipo: {
      type: String
    },
     _preciobase: {
        type: Number
      },
      _prueba: {
        type: String
      },
      _test: {
        type: String
      }
})

export type pacien={
    _id: number | null,
    _nombre: string | null,
    _apellido1: string | null,
    _apellido2: string | null,
    _edad: number | null,
    _dni: string | null,
    _seguro: boolean | null,
    _telefono: number | null,
    _dolencia: string | null,
    _tipo: string | null,
    _preciobase: number | null
}

export type paciUrgencias = {
    _id: number | null,
    _nombre: string | null,
    _apellido1: string | null,
    _apellido2: string | null,
    _edad: number | null,
    _dni: string | null,
    _seguro: boolean | null,
    _telefono: number | null,
    _dolencia: string | null,
    _tipo: string | null,
    _prueba: string | null,
    _preciobase: number | null
}

export type paciCovid = {
    _id: number | null,
    _nombre: string | null,
    _apellido1: string | null,
    _apellido2: string | null,
    _edad: number | null,
    _dni: string | null,
    _seguro: boolean | null,
    _telefono: number | null,
    _dolencia: string | null,
    _tipo: string | null,
    _test: string | null,
    _preciobase: number | null
}

export const Pacientes = model('pacientes', pacienteSchema)