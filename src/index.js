import app from './app.js'
import {PORT} from './config.js'
import bodyParser from 'body-parser'

import { iniciarTareaActualizacionHoroscopos } from '../src/controllers/tareaActualizacionHoroscopos.js';

app.listen(PORT)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  

// Iniciar la tarea de actualización de horóscopos
iniciarTareaActualizacionHoroscopos();

console.log('Server running on port ', PORT)