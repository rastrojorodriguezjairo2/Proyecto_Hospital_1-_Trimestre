"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const entradaTeclado_1 = require("./util/entradaTeclado");
const menu_1 = require("./util/menu");
const pacientes_1 = require("./clases/pacientes");
const empleados_1 = require("./clases/empleados");
const medicos_1 = require("./clases/medicos");
const administrativo_1 = require("./clases/administrativo");
const pacientes_2 = require("./schemas/pacientes");
const empleados_2 = require("./schemas/empleados");
const database_1 = require("./database/database");
let paciente;
let urgencias;
let covid;
let enpleado;
let medicos;
let administrativo;
let pacientes = new Array();
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
let empleados = new Array();
/*empleados[0] = new Medico(1, "Luis", "Senabre", 624874509,"medico", "cardiovascular", 1750)
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
*/
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let menu1;
    let menu2;
    let menu3;
    let pacientes;
    let id, empleados, nombre, apellido1, apellido2, edad, dni, asegurado, telefono, dolencia, tipo, preciobase;
    let nuepaci;
    do {
        menu1 = yield (0, menu_1.menu)();
        switch (menu1) {
            case 1:
                do {
                    menu2 = yield (0, menu_1.atender)();
                    switch (menu2) {
                        case 1:
                            id = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Identificador del nuevo paciente: "));
                            nombre = yield (0, entradaTeclado_1.leerTeclado)("Nombre: ");
                            apellido1 = yield (0, entradaTeclado_1.leerTeclado)("Primer apellido: ");
                            apellido2 = yield (0, entradaTeclado_1.leerTeclado)("Segundo apellido: ");
                            edad = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Edad del paciente: "));
                            dni = yield (0, entradaTeclado_1.leerTeclado)("DNI: ");
                            asegurado = Boolean(yield (0, entradaTeclado_1.leerTeclado)("¿Tiene seguro medico?(true or false): "));
                            telefono = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Teléfono:  "));
                            dolencia = yield (0, entradaTeclado_1.leerTeclado)("¿Qué le ocurre?: ");
                            tipo = yield (0, entradaTeclado_1.leerTeclado)("Tipo de paciente: ");
                            preciobase = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Cuanto le costara la consulta: "));
                            nuepaci = new pacientes_1.Paciente(id, nombre, apellido1, apellido2, edad, dni, asegurado, telefono, dolencia, tipo, preciobase);
                            break;
                        case 2:
                            yield database_1.db.conectarBD();
                            const paciSchema = {
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
                            };
                            const Schema = new pacientes_2.Pacientes(paciSchema);
                            yield Schema.save()
                                .then((doc) => console.log('El paciente se ha guardado correctamente' + doc))
                                .catch((err) => console.log(err));
                            yield database_1.db.desconectarBD();
                            break;
                        case 3:
                            yield database_1.db.conectarBD();
                            let query = yield pacientes_2.Pacientes.find({});
                            console.log(query);
                            yield database_1.db.desconectarBD();
                            break;
                        case 4:
                            yield database_1.db.conectarBD();
                            let borrar = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Ponga el ID del paciente que quiere eliminar'));
                            yield pacientes_2.Pacientes.findOneAndDelete({
                                _id: borrar
                            }, (err, doc) => {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    if (doc == null)
                                        console.log(`No se ha encontrado dicho paciente`);
                                    else
                                        console.log(`Documento Borrado` + doc);
                                }
                            });
                            yield database_1.db.desconectarBD();
                            break;
                    }
                } while (menu2 != 5);
            case 2:
                let nombreemp, apellido, contacto, puesto;
                let sueldo, especialidad, segundoIdioma;
                let menu3;
                let newemp;
                let newmedi;
                let newadmin;
                do {
                    menu3 = yield (0, menu_1.emplear)();
                    switch (menu3) {
                        case 1:
                            id = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Identificador del nuevo empleado: "));
                            nombreemp = yield (0, entradaTeclado_1.leerTeclado)("Nombre: ");
                            apellido = yield (0, entradaTeclado_1.leerTeclado)("Primer apellido: ");
                            contacto = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Teléfono:  "));
                            puesto = yield (0, entradaTeclado_1.leerTeclado)("Que tipo de trabajador es");
                            sueldo = parseInt(yield (0, entradaTeclado_1.leerTeclado)("¿Cuanto cobra?: "));
                            newemp = new empleados_1.Empleado(id, nombreemp, apellido, contacto, puesto, sueldo);
                            especialidad = yield (0, entradaTeclado_1.leerTeclado)("En que se especializa: ");
                            newmedi = new medicos_1.Medico(id, nombreemp, apellido, contacto, puesto, especialidad, sueldo);
                            segundoIdioma = yield (0, entradaTeclado_1.leerTeclado)("Segundo idioma: ");
                            newadmin = new administrativo_1.Administrativo(id, nombreemp, apellido, contacto, puesto, segundoIdioma, sueldo);
                            break;
                        case 2:
                            yield database_1.db.conectarBD();
                            let medicSchema = { _id: newemp.id,
                                _nombreemp: newemp.nombreemp,
                                _apellido: newemp.apellido,
                                _contacto: newemp.contacto,
                                _puesto: newemp.puesto,
                                _especialidad: newmedi.especialidad,
                                _idpaciente: nuepaci.id,
                                _sueldo: newemp.sueldo
                            };
                            const schema1 = new empleados_2.Trabajadores(medicSchema);
                            let adminiSchema = {
                                _id: newemp.id,
                                _nombreemp: newemp.nombreemp,
                                _apellido: newemp.apellido,
                                _contacto: newemp.contacto,
                                _puesto: newemp.puesto,
                                _segundoIdioma: newadmin.especialidad,
                                _sueldo: newemp.sueldo
                            };
                            const schema2 = new empleados_2.Trabajadores(adminiSchema);
                            yield schema1.save();
                            yield schema2.sabe()
                                .then((doc) => console.log('El empleado se ha guardado correctamente' + doc))
                                .catch((err) => console.log(err));
                            yield database_1.db.desconectarBD();
                            break;
                        case 3:
                            yield database_1.db.conectarBD();
                            let query = yield empleados_2.Trabajadores.find({});
                            console.log(query);
                            yield database_1.db.desconectarBD();
                            break;
                        case 4:
                            yield database_1.db.conectarBD();
                            let borrado = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Ponga el ID del empleado que quiere eliminar'));
                            yield empleados_2.Trabajadores.findOneAndDelete({
                                _id: borrado
                            }, (err, doc) => {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    if (doc == null)
                                        console.log(`No se ha encontrado dicho empleado`);
                                    else
                                        console.log(`Documento Borrado` + doc);
                                }
                            });
                            yield database_1.db.desconectarBD();
                            break;
                    }
                } while (menu3 != 5);
                break;
        }
    } while (menu1 != 4);
});
main();
