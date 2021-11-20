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
const pacientes_1 = require("./schemas/pacientes");
const database_1 = require("./database/database");
let paciente;
let urgencias;
let covid;
let enpleado;
let medicos;
let administrativo;
let pacientes = new Array();
let empleados = new Array();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let menu1;
    let menu2;
    let menu3;
    let pacientes;
    do {
        menu1 = yield (0, menu_1.menu)();
        switch (menu1) {
            case 1:
                let id, empleados, nombre, apellido1, apellido2;
                let edad, dni, asegurado, telefono, test;
                let dolencia, coste, seguro, tipo, prueba;
                let menu2;
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
                            asegurado = yield (0, entradaTeclado_1.leerTeclado)("¿Tiene seguro medico?: ");
                            if (asegurado == "si" || asegurado == "Si" || asegurado == "SI") {
                                seguro = true;
                            }
                            else {
                                seguro = false;
                            }
                            telefono = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Teléfono:  "));
                            dolencia = yield (0, entradaTeclado_1.leerTeclado)("¿Qué le ocurre?: ");
                            tipo = yield (0, entradaTeclado_1.leerTeclado)("Tipo de paciente: ");
                            if (tipo == "covid") {
                                test = yield (0, entradaTeclado_1.leerTeclado)("¿Qué test se va a hacer?");
                                coste = covid.pago();
                            }
                            else if (tipo == "urgencias") {
                                prueba = yield (0, entradaTeclado_1.leerTeclado)("¿Qué pruebas se le van a hacer?");
                                coste = urgencias.pago();
                            }
                            break;
                        case 2:
                            yield database_1.db.conectarBD();
                            const paciSchema = {
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
                            };
                            const Schema = new pacientes_1.Pacientes(paciSchema);
                            yield Schema.save()
                                .then((doc) => console.log('El paciente se ha guardado correctamente' + doc))
                                .catch((err) => console.log(err));
                            yield database_1.db.desconectarBD();
                            break;
                        case 3:
                            yield database_1.db.conectarBD();
                            yield pacientes.find({}, (err, doc) => {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    if (doc == null)
                                        console.log(`No existen documentos`);
                                    else
                                        console.log;
                                }
                            });
                            yield database_1.db.desconectarBD();
                            break;
                        case 4:
                            yield database_1.db.conectarBD();
                            const borrar = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Ponga el ID del paciente que quiere eliminar'));
                            yield pacientes_1.Pacientes.findOneAndDelete({
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
                let idemp, nombreemp, apellido, puesto;
                let sueldo, especialidad, segundoIdioma, contacto;
                let idpaciente;
                let menu3;
                do {
                    menu3 = yield (0, menu_1.emplear)();
                    switch (menu3) {
                        case 1:
                            idemp = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Identificador del nuevo empleado: "));
                            nombreemp = yield (0, entradaTeclado_1.leerTeclado)("Nombre: ");
                            apellido = yield (0, entradaTeclado_1.leerTeclado)("Primer apellido: ");
                            contacto = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Teléfono:  "));
                            idpaciente = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Que pacientes tiene asignado: "));
                            puesto = yield (0, entradaTeclado_1.leerTeclado)("Que tipo de trabajador es");
                            {
                                if (puesto == "medico") {
                                    especialidad = yield (0, entradaTeclado_1.leerTeclado)("¿Qué especialidad tiene?");
                                    sueldo = medicos.salario();
                                }
                                else if (puesto == "administrativo") {
                                    segundoIdioma = yield (0, entradaTeclado_1.leerTeclado)("¿Cual es su segundo idioma?");
                                    sueldo = administrativo.salario();
                                }
                            }
                    }
                    break;
                } while ();
            case 2:
                yield database_1.db.conectarBD();
                const paciSchema = {
                    _idemp: empleado.idemp,
                    _nombreemp: empleado.nombreemp,
                    _apellido: empleado.apellido,
                    _contacto: empleado.contacto,
                    _especialidad: medicos.especialidad,
                    _segundoIdioma: administrativo.segundoIdioma,
                    _preciobase: paciente
                };
                const Schema = new pacientes_1.Pacientes(paciSchema);
                yield Schema.save()
                    .then((doc) => console.log('El paciente se ha guardado correctamente' + doc))
                    .catch((err) => console.log(err));
                yield database_1.db.desconectarBD();
                break;
            case 3:
                yield database_1.db.conectarBD();
                yield empleados.find({}, (err, doc) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        if (doc == null)
                            console.log(`No existen documentos`);
                        else
                            console.log;
                    }
                });
                yield database_1.db.desconectarBD();
                break;
            case 4:
                yield database_1.db.conectarBD();
                const ;
                delete ;
                parseInt(yield (0, entradaTeclado_1.leerTeclado)('Ponga el ID del empleado que quiere eliminar'));
                yield empleados.findOneAndDelete({
                    _id: borrar
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
});
3;
let menu4, salario, idemp;
let objIndex;
do {
    menu4 = await (0, menu_1.emplear)();
    switch (menu4) {
        case 1:
            await database_1.db.conectarBD();
            const buscar = () => __awaiter(void 0, void 0, void 0, function* () {
                let identificador;
                identificador = parseInt(yield (0, entradaTeclado_1.leerTeclado)("Teléfono:  "));
                if (identificador == empleados.idemp) {
                    for (let a of Empleados) {
                        console.log(a.todo());
                    }
                }
            });
    }
    break;
} while (menu4 != 3);
break;
while (menu1 != 3)
    ;
main();
