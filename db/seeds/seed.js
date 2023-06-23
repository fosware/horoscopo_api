import mongoose from 'mongoose';
import { pool } from "../../src/db.js";
import { Signo } from '../../src/models/signos.js'
import { Horoscopo } from '../../src/models/horoscopo.js';

const signosData = [
  {
    signo: 'aries',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'tauro',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'geminis',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'cancer',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'leo',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'virgo',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'libra',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'escorpio',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'sagitario',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'capricornio',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'acuario',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  {
    signo: 'piscis',
    caracteristica: '...',
    descripcion: '...',
    elemento: '...',
    fecha_inicia: new Date(),
    fecha_termina: new Date(),
    ruta_img: 'cloudinary/signo.svg'
  },
  // Agrega los demás signos aquí...
];


const seedSignos = async () => {
  try {
    // Elimina todos los signos existentes en la base de datos
    await Signo.deleteMany();

    // Agrega los nuevos signos desde el arreglo
    const signos = await Signo.create(signosData);

    console.log('Se han agregado los signos:', signos);
  } catch (error) {
    console.error('Error al agregar los signos:', error);
  }
  return 0;
};

seedSignos();
