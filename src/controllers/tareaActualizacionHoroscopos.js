import cron from 'node-cron';
import { obtenerYGuardarTodosLosHoroscopos } from './horoscopos.controller.js';

export function iniciarTareaActualizacionHoroscopos() {
    // Función para actualizar los horóscopos
    async function actualizarHoroscopos() {
        try {
            // Llamar a la función para obtener y guardar todos los horóscopos
            console.log("Iniciar horóscopos");
            await obtenerYGuardarTodosLosHoroscopos();
            console.log("Actualización de horóscopos completada");
        } catch (error) {
            console.log("Error al actualizar los horóscopos:", error);
        }
    }

    // Programar la ejecución de la función actualizarHoroscopos todos los días a las 16:34
    cron.schedule("46 16 * * *", () => {
        actualizarHoroscopos();
    });
}