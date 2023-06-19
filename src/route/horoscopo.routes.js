import {Router} from 'express'
import { 
    getHoroscopos, 
    getHoroscopo, 
    createHoroscopo, 
    //updateHoroscopo, 
    //deleteHoroscopo 
} from '../controllers/horoscopos.controller.js'

const router = Router()

router.get('/horoscopos',       getHoroscopos   )
router.get('/horoscopo/:id',    getHoroscopo    )
router.post('/horoscopo',      createHoroscopo )
//router.patch('/employee/:id',   updateEmployee )
//router.delete('/employee/:id', deleteEmployee )



export default router