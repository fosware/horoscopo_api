import moment from "moment";
import _ from 'lodash';
import mongoose from "mongoose";
import { pool } from "../db.js";
import { HoroscopoSchema } from "../models/horoscopo.js"; // Importa el modelo de Mongoose
import { Signo } from "../models/signos.js"; // Importa el modelo de Mongoose
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
  let { signo } = req.params;
  signo = _.deburr(signo.toLowerCase()); // Convertir a minúsculas y eliminar acentos
  try {
    const signoObj = await Signo.findOne({ signo });
    if (!signoObj) {
      return res.status(404).json({ message: "Signo no encontrado." });
    }
    const horoscopo = await Horoscopo.findOne({ signo: signoObj._id });
    if (!horoscopo) {
      return res.status(404).json({ message: "Horóscopo no encontrado." });
    }
    const horoscopoResponse = {
      _id: horoscopo._id,
      fecha: horoscopo.fecha,
      signo: signoObj, // todo el objeto signoObj.signo, // Nombre del signo en lugar del ID
      horoscopo: horoscopo.horoscopo,
      numSuerte: horoscopo.numSuerte,
      compatibleCon: horoscopo.compatibleCon,
      colorDia: horoscopo.colorDia,
      created_at: horoscopo.created_at,
      __v: horoscopo.__v,
    };
    res.status(200).json(horoscopoResponse);

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
  try {
    // Buscar el signo en la colección de signos
    const existingSigno = await Signo.findOne({ signo });
    if (!existingSigno) {
      throw new Error("El signo no existe en la colección de signos");
    }
    // Verificar si ya existe un horóscopo con la misma fecha y signo
    const existingHoroscopo = await Horoscopo.findOne({
      fecha,
      signo: existingSigno._id,
    });
    if (existingHoroscopo) {
      throw new Error("Ya existe una entrada para esa fecha y signo");
    }

    // Guardar el nuevo horóscopo con la referencia al signo
    const horoscopoNew = new Horoscopo({
      signo: existingSigno._id,
      horoscopo,
      fecha,
      numSuerte: numerosSuerte.split(","),
      compatibleCon,
      colorDia,
      created_at: new Date(),
    });
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
