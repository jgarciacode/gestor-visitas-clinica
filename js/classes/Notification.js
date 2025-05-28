import { formulario } from '../selectors.js'

export default class Notificacion {
    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }


    mostrar() {
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alerta', 'uppercase', 'font-bold', 'text-sm');

        // Eliminar alerta repetida
        const alertaPrevia = document.querySelector('.alerta');
        if (alertaPrevia) {
            alertaPrevia?.remove();
        }

        //Si es de tipo error, añadimos fondo rojo, sino verde
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');
        //Añadimos el texto
        alerta.textContent = this.texto;
        //Añadimos la alerta al DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        //Quitar despues de 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}