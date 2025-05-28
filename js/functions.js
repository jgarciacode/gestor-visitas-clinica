import Notification from './classes/Notification.js'
import AdminCitas from './classes/AdminCitas.js'
import { citaObj, editando } from './variables.js'
import { formulario, formularioInput, pacienteInput, propietarioInput, emailInput, telefonoInput, fechaInput, sintomasInput } from './selectors.js'


const citas = new AdminCitas()

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    //Validar campos
    console.log(citaObj);
    if (Object.values(citaObj).some(valor => valor.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if (editando.value) {
        citas.editar({ ...citaObj })
        new Notificacion({
            texto: 'Paciente modificado',
            tipo: 'exito'
        })
    } else {
        citas.agregarCita({ ...citaObj })
        new Notificacion({
            texto: 'Paciente registrado correctamente',
            tipo: 'exito'
        })
    }
    formulario.reset();
    reiniciarObjetoCita();
    formularioInput.value = 'Registrar Paciente';
    editando.value = false;
}

export function reiniciarObjetoCita() {
    citaObj.id = generarID();
    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';
}

export function generarID() {
    return Math.random().toString(32).substring(2) + Date.now()
}