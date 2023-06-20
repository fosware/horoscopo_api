import {Router} from 'express'
import { 
    getHoroscopos, 
    getHoroscopo, 
    createHoroscopo, 

} from '../controllers/horoscopos.controller.js'

const router = Router()

router.get('/horoscopos',    getHoroscopos   )
router.get('/horoscopo/:signo', getHoroscopo )
router.post('/horoscopo',    createHoroscopo )



export default router