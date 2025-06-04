import { citaObj, editando } from './variables.js';
import { pacienteInput, propietarioInput, emailInput, telefonoInput, fechaInput, sintomasInput, formularioInput } from './selectors.js';

export function cargarEdicion(cita) {
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    telefonoInput.value = cita.telefono;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando.value = true

    formularioInput.value = 'Guardar Cambios';
}