import { generarID } from './functions.js'

export let editando = {
    value: false
};

//Objeto de cita
export const citaObj = {
    id: generarID(),
    paciente: '',
    propietario: '',
    email: '',
    telefono: '',
    fecha: '',
    sintomas: ''
}