import express from 'express'
import cors from 'cors';
import horoscopoRoutes from './route/horoscopo.routes.js'
import indexRoutes from './route/index.routes.js'



const app = express();

app.use(express.json());
app.use(cors()); // Configuración básica de CORS, permite todas las solicitudes

app.use(indexRoutes);
app.use('/api', horoscopoRoutes);

app.use((req, res, next) => {
    res.status(400).json({
        message: 'endpoint not found'
    })
} )



export default app;