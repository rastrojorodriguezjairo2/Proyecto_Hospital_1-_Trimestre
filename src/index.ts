import { leerTeclado } from "./util/entradaTeclado";
import {menu, atender, emplear, calcular} from "./util/menu"
import {Paciente} from "./clases/pacientes"
import {Urgencias} from "./clases/urgencias"
import {Covid} from "./clases/covid"
import {Empleado} from "./clases/empleados"
import {Medicos} from "./clases/medicos"
import {Administrativo} from "./clases/administrativo"
import {Pacientes, pacien, paciUrgencias, paciCovid} from "./schemas/pacientes"
import {Trabajadores, empl, medi, admin} from "./schemas/empleados"
import {db} from './database/database'

let paciente: Paciente
let urgencias: Urgencias
let covid: Covid
let enpleado: Empleado
let medicos: Medicos
let administrativo: Administrativo
let pacientes: Array<Paciente> = new Array<Paciente>()
pacientes[0] = new Urgencias(1,"Paco", "Romero", "Lopez", 62, "65249871d", true, 682247912, "infarto", "cardiovascular", 0)
pacientes[1] = new Urgencias(2,"Laura", "Fernandez", "Sotelo", 26, "62784571u", false, 627883094, "golpe en la cabeza", "tac", 95)
pacientes[2] = new Covid(3, "Marcos", "Rodriguez", "Laguna", 12, "925466124n", false, 627883094, "covid", "antigeno", 130)
pacientes[3] = new Urgencias(4,"Jose", "Palacios", "Montes", 25, "83601684w", true, 695137820, "aparente rotura de hueso", "rayos x", 0)
pacientes[4] = new Covid(5, "Marta", "Cruz", "Lucero", 46, "96324682p", true, 689639173, "comprobar vacuna", "serologico", 125)
pacientes[5] = new Urgencias(6, "Lucas", "Soriano", "De la luz", 61,"48214692r", false, 824662728, "Pedrada en el ojo", "oftalmologia", 136)
pacientes[6] = new Urgencias(7, "Celeste", "Martinez", "Noble", 13, "53247859b", true, 752144695, "Tapon en el oido", "otorrino", 0)
pacientes[7] = new Covid(8, "Carlos", "Oliva", "Espino", 42, "58424156l", false, 693224740, "covid", "PCR", 170)
pacientes[8] = new Urgencias(9, "Clara", "Leche", "Blanca", 19, "81672569o", false, 692930170, "molestias en la zona genital", "ginecologia", 149)
pacientes[9] = new Covid(10, "Sergio", "Ortega", "Arias", 85, "73192053q", true, 832442921,"posible covid", "PCR", 0)
pacientes[10] = new Urgencias(11, "Luis", "Marquez", "Masera", 24, "63201495ñ", false, 965412035,"apendicitis", "operacion", 180)


let empleados: Array<Empleado> = new Array<Empleado>()
empleados[0] = new Medicos(1, "Luis", "Senabre", 624874509, [1], "cardiovascular", 1750)
empleados[1] = new Medicos(2, "Sara", "Peñisco", 645982013, [2], "traumatologo", 1450)
empleados[2] = new Medicos(3, "Marcos", "Lopez", 692067316, [3, 7], "pediatra", 1800)
empleados[3] = new Medicos(4, "Maria", "Pernal", 614294560, [5], "neurologo", 1900)
empleados[4] = new Medicos(5, "Francisco", "Cruz", 622740136, [6], "oftalmologo", 1650)
empleados[5] = new Medicos(6, "Luna", "Nocturna", 629240301, [9], "ginecologo", 1550)
empleados[6] = new Medicos(7, "Angel", "Ruiz", 625974120, [8, 10], "otorrino", 1450)
empleados[7] = new Medicos(8, "Macarena", "Balet", 639256014, [11], "cirujano", 2000)
empleados[8] = new Administrativo(9, "Desire", "Luces", 639810231, "ingles", 1100)
empleados[9] = new Administrativo(10, "Maribel", "Carmona", 649230211, "frances", 1200)
empleados[10] = new Administrativo(11, "Carlos", "Cemento", 522001143, "aleman", 1300)
empleados[11] = new Administrativo(12, "Begoña", "Castaño", 643014495, "frances", 1200)
empleados[12] = new Administrativo(13,"Sergio", "Norte", 622301445, "aleman", 1300)
empleados[13] = new Administrativo(14, "Pablo", "Serrano", 6549832013, "ingles", 1100)

const main = async () => {
    let menu1: number
    let menu2: number
    let menu3: number
    let pacientes: Paciente

    do {
        menu1 = await menu()
        switch(menu1) {
            case 1:
                let id: number, empleados: string, nombre: string, apellido1: string, apellido2: string
                let edad: number, dni: string, asegurado: string, telefono: number, test: string
                let dolencia: string, coste: number, seguro: boolean, tipo: string, prueba: string
                let menu2: number
                do{
                    menu2 = await atender()
                    switch(menu2) {
                        case 1:
                            id = parseInt(await leerTeclado("Identificador del nuevo paciente: "))
                            nombre = await leerTeclado("Nombre: ")
                            apellido1 = await leerTeclado("Primer apellido: ")
                            apellido2 = await leerTeclado("Segundo apellido: ")
                            edad = parseInt(await leerTeclado("Edad del paciente: "))
                            dni = await leerTeclado("DNI: ")
                            asegurado = await leerTeclado("¿Tiene seguro medico?: ")
                                if (asegurado == "si" || asegurado == "Si" || asegurado == "SI") {
                                  seguro = true
                                } else {
                                   seguro = false
                            }
                            telefono = parseInt(await leerTeclado("Teléfono:  "))
                            dolencia = await leerTeclado("¿Qué le ocurre?: ")
                            tipo = await leerTeclado("Tipo de paciente: ")
                                if(tipo=="covid"){
                                    test = await leerTeclado("¿Qué test se va a hacer?")
                                    coste = covid.pago()
                                } else if (tipo == "urgencias"){
                                    prueba = await leerTeclado("¿Qué pruebas se le van a hacer?")
                                    coste = urgencias.pago()
                                }
                        break
                        case 2:
                            await db.conectarBD()
                            const paciSchema ={
                                _id: paciente.id,
                                _nombre: paciente.nombre,
                                _apellido1: paciente.apellido1,
                                _apellido2: paciente.apellido2,
                                _edad: paciente.edad,
                                _dni: paciente.dni,
                                _seguro: paciente.seguro,
                                _telefono: paciente.telefono,
                                _dolencia: paciente.dolencia,
                                _prueba: urgencias.prueba,
                                _test: covid.test,
                                _preciobase: paciente
                            }
                            const Schema = new Pacientes(paciSchema)
                            await Schema.save()
                            .then((doc: string)=> console.log('El paciente se ha guardado correctamente' + doc))
                            .catch((err:any)=> console.log(err))
                            await db.desconectarBD()
                        break
                        case 3:
                            await db.conectarBD()
                            await pacientes.find({},
                                (err:any, doc: null) => {
                                    if(err){
                                        console.log(err)
                                    }else{
                                        if(doc == null) console.log(`No existen documentos`)
                                        else console.log
                                    }
                                }) 
                                await db.desconectarBD()
                        break
                        case 4:
                            await db.conectarBD()
                            const borrar = parseInt(await leerTeclado('Ponga el ID del paciente que quiere eliminar'))
                            await Pacientes.findOneAndDelete(
                                {
                                    _id: borrar
                                },
                                (err:any, doc: string | null) => {
                                    if(err){
                                        console.log(err)
                                    }else{
                                        if(doc == null)console.log(`No se ha encontrado dicho paciente`)
                                        else console.log(`Documento Borrado`+ doc)
                                    }
                                })
                            await db.desconectarBD()
                        break
                    }
                } while (menu2!=5)
            case 2:
                let idemp:number, nombreemp:string, apellido:string, puesto:string
                let sueldo: number, especialidad: string, segundoIdioma: string, contacto: number
                let idpaciente:number
                let menu3: number,
                do{
                    menu3 = await emplear()
                    switch(menu3) {
                        case 1:
                            idemp = parseInt(await leerTeclado("Identificador del nuevo empleado: "))
                            nombreemp = await leerTeclado("Nombre: ")
                            apellido = await leerTeclado("Primer apellido: ")
                            contacto = parseInt(await leerTeclado("Teléfono:  "))
                            idpaciente = parseInt(await leerTeclado("Que pacientes tiene asignado: "))
                            puesto = await leerTeclado ("Que tipo de trabajador es"){
                                if (puesto=="medico"){
                                    especialidad = await leerTeclado("¿Qué especialidad tiene?")
                                    sueldo = medicos.salario()
                                } else if (puesto=="administrativo"){
                                    segundoIdioma = await leerTeclado("¿Cual es su segundo idioma?")
                                    sueldo = administrativo.salario()
                                }
                            }
                        } 
                        break
                        case 2:
                            await db.conectarBD()
                            const paciSchema ={
                                _idemp: empleado.idemp,
                                _nombreemp: empleado.nombreemp,
                                _apellido: empleado.apellido,
                                _contacto: empleado.contacto,
                                _especialidad: medicos.especialidad,
                                _segundoIdioma: administrativo.segundoIdioma,
                                _preciobase: paciente
                            }
                            const Schema = new Pacientes(paciSchema)
                            await Schema.save()
                            .then((doc: string)=> console.log('El paciente se ha guardado correctamente' + doc))
                            .catch((err:any)=> console.log(err))
                            await db.desconectarBD()
                        break
                        case 3:
                            await db.conectarBD()
                            await empleado.find({},
                                (err:any, doc: null) => {
                                    if(err){
                                        console.log(err)
                                    }else{
                                        if(doc == null) console.log(`No existen documentos`)
                                        else console.log
                                    }
                                }) 
                                await db.desconectarBD()
                        break
                        case 4:
                        await db.conectarBD()
                            const delete = parseInt(await leerTeclado('Ponga el ID del empleado que quiere eliminar'))
                            await empleados.findOneAndDelete(
                                {
                                    _id: borrar
                                },
                                (err:any, doc: string | null) => {
                                    if(err){
                                        console.log(err)
                                    }else{
                                        if(doc == null)console.log(`No se ha encontrado dicho empleado`)
                                        else console.log(`Documento Borrado`+ doc)
                                    }
                                })
                            await db.desconectarBD()
                        break
                    }
                }while (menu3!=5)
            break
            case 3:
                let menu4: number, salario: number, idemp: number
                let objIndex: number
                do{
                    menu4 = await emplear()
                    switch(menu4){
                        case 1:
                            await db.conectarBD()
                            const buscar = async () => {
                                let identificador: number
                                identificador = parseInt(await leerTeclado("Teléfono:  "))
                                if(identificador==empleados.idemp){
                                    for (let a of Empleados) {
                                        console.log(a.todo())
                                    }
                                }
                            }
                            }
                        break
                    }while(menu4!=3)
            break
        }
    } while(menu1!=3)
}
main()