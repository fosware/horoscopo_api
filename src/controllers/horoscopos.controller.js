import moment from "moment";
import mongoose from "mongoose";
import { pool } from "../db.js";
import { horoscopoSchema } from "../models/horoscopo.js"; // Importa el modelo de Mongoose
import { horoscopoData } from "./horoscopo_data.js";


export const getHoroscopos = async (req, res) => {

  return res.status(200).json({ mesage: 'get all horoscopos' });
};

export const getHoroscopo = async (req, res) => {
  const { signo } = req.params;
  const signoData = await horoscopoData(signo);
  return res.status(200).json(signoData);
}


const Horoscopo = mongoose.model("Horoscopo", horoscopoSchema); // Crea el modelo a partir del esquema
export const createHoroscopo = async (req, res) => {
  const { signo, horoscopo, dia, numerosSuerte, compatibleCon, colorDia } = req.body;

  // Transformar la fecha al formato deseado
  const fecha = moment(dia, "DD [de] MMMM, YYYY").toDate();

  const horoscopoNew = new Horoscopo({
    signo,
    horoscopo,
    fecha,
    numSuerte: numerosSuerte.split(","),
    compatibleCon,
    colorDia,
    created_at: new Date()
  });

  try {
    const savedHoroscopo = await horoscopoNew.save();
    res.json(savedHoroscopo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

