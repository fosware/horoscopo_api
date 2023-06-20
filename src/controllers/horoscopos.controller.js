import moment from "moment";
import { pool } from "../db.js";
import mongoose from "mongoose";
import { horoscopoSchema } from "../models/horoscopo.js"; // Importa el modelo de Mongoose


export const getHoroscopos = async (req, res) => {
/*   try {    
    const query = await pool`SELECT id, name, salary FROM employee`;
    res.json(query);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  } */
  return res.status(200).json({mesage:'get all horoscopos'});
};

export const getHoroscopo = async (req, res) => {

   return res.status(200).json({mesage:'get horoscopo by id'});
};


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



/* const Horoscopo = mongoose.model("Horoscopo", horoscopoShcema);

export const createHoroscopo = async (req, res) => {
  const horoscopoNew = new Horoscopo(req.body);
  
  try {
    const savedHoroscopo = await horoscopoNew.save();
    res.json(savedHoroscopo);
  } catch (error) {
    console.log('Error al guardar el horóscopo:', error);
    res.status(500).json({ error: 'Ocurrió un error al guardar el horóscopo' });
  }
}; */

/* 
export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const query = await pool`DELETE FROM employee WHERE id = ${id} returning *`;
    if (query.length) res.sendStatus(204);
    else res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const id = req.params.id;

    const name_null = name ? name : null;
    const salary_null = salary ? salary : null;

    //const query = await pool `UPDATE employee SET name = ${name}, salary =${salary} WHERE id = ${id} returning *`
    const query =
      await pool`UPDATE employee SET name = COALESCE(${name_null}, name) , salary = COALESCE(${salary_null}, salary) WHERE id = ${id} returning *`;
    if (query.length) res.json(query);
    else res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
 */