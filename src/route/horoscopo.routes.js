import { Router } from "express";
import {
  getHoroscopos,
  getHoroscopo,
  createHoroscopo,
  obtenerYGuardarTodosLosHoroscopos,
} from "../controllers/horoscopos.controller.js";

const router = Router();

router.get("/horoscopos", getHoroscopos);
router.get("/horoscopo/:signo", getHoroscopo);
router.post("/horoscopo", createHoroscopo);
router.get("/horoscopos/obtener-y-guardar", obtenerYGuardarTodosLosHoroscopos);

export default router;
