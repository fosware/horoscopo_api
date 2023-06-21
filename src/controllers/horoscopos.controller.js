import moment from "moment";
import mongoose from "mongoose";
import { pool } from "../db.js";
import { HoroscopoSchema } from "../models/horoscopo.js"; // Importa el modelo de Mongoose
import { horoscopoData } from "./horoscopo_data.js";

const todosLosSignos = [
  "aries",
  "tauro",
  "geminis",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "escorpio",
  "sagitario",
  "capricornio",
  "acuario",
  "piscis",
];

//const Horoscopo = mongoose.model("Horoscopo", horoscopoSchema);
const Horoscopo = mongoose.model("Horoscopo", HoroscopoSchema);

export const getHoroscopos = async (req, res) => {
  return res.status(200).json({ mesage: "get all horoscopos" });
};


export const getHoroscopo = async (req, res) => {
  const { signo } = req.params;
  
  try {
    
    const horoscopo = await Horoscopo.findOne(
      { $text: { $search: signo } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    
    if (!horoscopo) {
      return res.status(404).json({ message: "Horóscopo no encontrado." });
    }

    res.status(200).json(horoscopo);
  } catch (error) {
    console.log("Error al obtener el horóscopo:", error);
    res.status(500).json({ error: "Ocurrió un error al obtener el horóscopo." });
  }
};



export const createHoroscopo = async (
  signo,
  horoscopo,
  dia,
  numerosSuerte,
  compatibleCon,
  colorDia
) => {
  const fecha = moment(dia, "DD [de] MMMM, YYYY").toDate();

  const horoscopoNew = new Horoscopo({
    signo,
    horoscopo,
    fecha,
    numSuerte: numerosSuerte.split(","),
    compatibleCon,
    colorDia,
    created_at: new Date(),
  });

  try {
    const savedHoroscopo = await horoscopoNew.save();
    return savedHoroscopo;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const obtenerYGuardarTodosLosHoroscopos = async (req, res) => {
  try {
    for (const signo of todosLosSignos) {
      const signoData = await horoscopoData(signo);
      await createHoroscopo(
        signoData.signo,
        signoData.horoscopo,
        signoData.dia,
        signoData.numerosSuerte,
        signoData.compatibleCon,
        signoData.colorDia
      );
    }

    res
      .status(200)
      .json({ message: "Horóscopos obtenidos y guardados correctamente." });
  } catch (error) {
    console.log("Error al obtener y guardar los horóscopos:", error);
    res.status(500).json({
      error: "Ocurrió un error al obtener y guardar los horóscopos.",
    });
  }
};