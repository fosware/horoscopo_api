import { pool } from "../db.js";
import { horoscopoShcema }  from "../models/horoscopo.js";
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
  /* try {
    const id = req.params.id;
    const query =
      await pool`SELECT id, name, salary FROM employee WHERE id = ${id}`;

    if (query.length) res.status(200).json(query);
    else res.status(400).json({ message: "Employee not found" });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
   }
   */   
   return res.status(200).json({mesage:'get horoscopo by id'});
};

export const createHoroscopo = async (req, res) => {
  /* try {
    const { name, salary } = req.body;
    const [rows] =
      await pool`INSERT INTO employee (name, salary) VALUES (${name}, ${salary}) returning *`;
    console.log(rows);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  } */
  const horoscopoNew = new  horoscopoShcema(req.body);
  horoscopoNew
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
  
  //return res.status(200).json({mesage:'create horoscopo'});
  return horoscopoNew;

};
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