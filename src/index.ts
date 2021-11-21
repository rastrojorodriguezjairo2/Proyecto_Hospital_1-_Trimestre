import { leerTeclado } from "./util/entradaTeclado";
import {menu, atender, emplear} from "./util/menu"
import {Paciente} from "./clases/pacientes"
import {Urgencias} from "./clases/urgencias"
import {Covid} from "./clases/covid"
import {Empleado} from "./clases/empleados"
import {Medico} from "./clases/medicos"
import {Administrativo} from "./clases/administrativo"
import {Pacientes, pacien, paciUrgencias, paciCovid} from "./schemas/pacientes"
import {Trabajadores, empl, medi, admin} from "./schemas/empleados"
import {db} from './database/database'

let paciente: Paciente
let urgencias: Urgencias
let covid: Covid
let enpleado: Empleado
let medicos: Medico
let administrativo: Administrativo
let pacientes: Array<Paciente> = new Array<Paciente>()
/*pacientes[0] = new Urgencias(1,"Paco", "Romero", "Lopez", 62, "65249871d", true, 682247912, "infarto","urgencias", "cardiovascular", 0)
pacientes[1] = new Urgencias(2,"Laura", "Fernandez", "Sotelo", 26, "62784571u", false, 627883094, "golpe en la cabeza", "urgencias","tac", 95)
pacientes[2] = new Covid(3, "Marcos", "Rodriguez", "Laguna", 12, "925466124n", false, 627883094, "covid", "covid","antigeno", 130)
pacientes[3] = new Urgencias(4,"Jose", "Palacios", "Montes", 25, "83601684w", true, 695137820, "aparente rotura de hueso","urgencias", "rayos x", 0)
pacientes[4] = new Covid(5, "Marta", "Cruz", "Lucero", 46, "96324682p", true, 689639173, "comprobar vacuna", "covid","serologico", 125)
pacientes[5] = new Urgencias(6, "Lucas", "Soriano", "De la luz", 61,"48214692r", false, 824662728, "Pedrada en el ojo", "urgencias","oftalmologia", 136)
pacientes[6] = new Urgencias(7, "Celeste", "Martinez", "Noble", 13, "53247859b", true, 752144695, "Tapon en el oido", "urgencias","otorrino", 0)
pacientes[7] = new Covid(8, "Carlos", "Oliva", "Espino", 42, "58424156l", false, 693224740, "covid","covid", "PCR", 170)
pacientes[8] = new Urgencias(9, "Clara", "Leche", "Blanca", 19, "81672569o", false, 692930170, "molestias en la zona genital","urgencias", "ginecologia", 149)
pacientes[9] = new Covid(10, "Sergio", "Ortega", "Arias", 85, "73192053q", true, 832442921,"posible covid","covid", "PCR", 0)
pacientes[10] = new Urgencias(11, "Luis", "Marquez", "Masera", 24, "63201495ñ", false, 965412035,"apendicitis", "urgencias","operacion", 180);
*/
let empleados: Array<Empleado> = new Array<Empleado>()
empleados[0] = new Medico(1, "Luis", "Senabre", 624874509,"medico", "cardiovascular", 1750)
empleados[1] = new Medico(2, "Sara", "Peñisco", 645982013,"medico", "traumatologo", 1450)
empleados[2] = new Medico(3, "Marcos", "Lopez", 692067316, "medico", "pediatra", 1800)
empleados[3] = new Medico(4, "Maria", "Pernal", 614294560, "medico","neurologo", 1900)
empleados[4] = new Medico(5, "Francisco", "Cruz", 622740136,"medico", "oftalmologo", 1650)
empleados[5] = new Medico(6, "Luna", "Nocturna", 629240301, "medico","ginecologo", 1550)
empleados[6] = new Medico(7, "Angel", "Ruiz", 625974120,"medico", "otorrino", 1450)
empleados[7] = new Medico(8, "Macarena", "Balet", 639256014, "medico","cirujano", 2000)
empleados[8] = new Administrativo(9, "Desire", "Luces", 639810231, "administrativo","ingles", 1100)
empleados[9] = new Administrativo(10, "Maribel", "Carmona", 649230211, "administrativo","frances", 1200)
empleados[10] = new Administrativo(11, "Carlos", "Cemento", 522001143,"administrativo", "aleman", 1300)
empleados[11] = new Administrativo(12, "Begoña", "Castaño", 643014495,"administrativo", "frances", 1200)
empleados[12] = new Administrativo(13,"Sergio", "Norte", 622301445, "administrativo","aleman", 1300)
empleados[13] = new Administrativo(14, "Pablo", "Serrano", 6549832013,"administrativo", "ingles", 1100);

const main = async () => {
    let menu1: number
    let menu2: number
    let menu3: number
    let pacientes: Paciente
    let id: number, empleados: string, nombre: string, apellido1: string, apellido2: string, edad: number, dni: string, asegurado: boolean, telefono: number, dolencia: string, tipo: string, preciobase: number
    let nuepaci: any
    do {
        menu1 = await menu()
        switch(menu1) {
            case 1:
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
                            asegurado = Boolean(await leerTeclado("¿Tiene seguro medico?(true or false): "))
                            telefono = parseInt(await leerTeclado("Teléfono:  "))
                            dolencia = await leerTeclado("¿Qué le ocurre?: ")
                            tipo = await leerTeclado("Tipo de paciente: ")
                            preciobase = parseInt(await leerTeclado("Cuanto le costara la consulta: "))
                            nuepaci = new Paciente (id, nombre, apellido1, apellido2, edad, dni, asegurado, telefono, dolencia, tipo, preciobase)
                        break
                        case 2:
                            await db.conectarBD()
                            const paciSchema ={
                                _id: nuepaci.id,
                                _nombre: nuepaci.nombre,
                                _apellido1: nuepaci.apellido1,
                                _apellido2: nuepaci.apellido2,
                                _edad: nuepaci.edad,
                                _dni: nuepaci.dni,
                                _seguro: nuepaci.seguro,
                                _telefono: nuepaci.telefono,
                                _dolencia: nuepaci.dolencia,
                                _prueba: nuepaci.prueba,
                                _test: nuepaci.test,
                                _preciobase: nuepaci.preciobase
                            }
                            const Schema = new Pacientes(paciSchema)
                            await Schema.save()
                            .then((doc: string)=> console.log('El paciente se ha guardado correctamente' + doc))
                            .catch((err:any)=> console.log(err))
                            await db.desconectarBD()
                        break
                        case 3:
                            await db.conectarBD()
                            let query: any = await Pacientes.find({})
                                console.log(query)
                                await db.desconectarBD()
                        break
                        case 4:
                            await db.conectarBD()
                            let borrar = parseInt(await leerTeclado('Ponga el ID del paciente que quiere eliminar'))
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
                let nombreemp:string, apellido:string, contacto: number, puesto:string
                let sueldo: number, especialidad: string, segundoIdioma: string
                let menu3: number
                let newemp: any
                let newmedi: any
                let newadmin: any
                do{
                    menu3 = await emplear()
                    switch(menu3) {
                        case 1:
                            id = parseInt(await leerTeclado("Identificador del nuevo empleado: "))
                            nombreemp = await leerTeclado("Nombre: ")
                            apellido = await leerTeclado("Primer apellido: ")
                            contacto = parseInt(await leerTeclado("Teléfono:  "))
                            puesto = await leerTeclado ("Que tipo de trabajador es")
                            sueldo = parseInt(await leerTeclado("¿Cuanto cobra?: "))
                            newemp = new Empleado (id, nombreemp, apellido, contacto, puesto, sueldo)
                            especialidad = await leerTeclado("En que se especializa: ")
                            newmedi = new Medico (id, nombreemp, apellido, contacto, puesto, especialidad, sueldo)
                            segundoIdioma = await leerTeclado ("Segundo idioma: ")
                            newadmin = new Administrativo (id, nombreemp, apellido, contacto, puesto, segundoIdioma, sueldo)


                        break
                        case 2:
                            await db.conectarBD()
                            let medicSchema: medi=
                            {   _id: newemp.id,
                                _nombreemp: newemp.nombreemp,
                                _apellido: newemp.apellido,
                                _contacto: newemp.contacto,
                                _puesto: newemp.puesto,
                                _especialidad: newmedi.especialidad,
                                _idpaciente: nuepaci.id,
                                _sueldo: newemp.sueldo
                            }
                            const schema1 = new Trabajadores(medicSchema)
                            let adminiSchema: admin= {
                                _id: newemp.id,
                                _nombreemp: newemp.nombreemp,
                                _apellido: newemp.apellido,
                                _contacto: newemp.contacto,
                                _puesto: newemp.puesto,
                                _segundoIdioma: newadmin.especialidad,
                                _sueldo: newemp.sueldo
                            }
                            const schema2 = new Trabajadores(adminiSchema)
                            await schema1.save()
                            await schema2.sabe()
                            .then((doc: string)=> console.log('El empleado se ha guardado correctamente' + doc))
                            .catch((err:any)=> console.log(err))
                            await db.desconectarBD()
                        break
                        case 3:
                            await db.conectarBD()
                            let query: any = await Trabajadores.find({})
                                console.log(query)
                                await db.desconectarBD()
                        break
                        case 4:
                        await db.conectarBD()
                            let borrado = parseInt(await leerTeclado('Ponga el ID del empleado que quiere eliminar'))
                            await Trabajadores.findOneAndDelete(
                                {
                                    _id: borrado
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
        }
    } while(menu1!=4)}
main()