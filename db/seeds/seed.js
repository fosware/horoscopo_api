import mongoose from 'mongoose';
import { pool } from "../../src/db.js";
import { Signo } from '../../src/models/signos.js'
import { Horoscopo } from '../../src/models/horoscopo.js';

const signosData = [
  {
    signo: 'aries',
    caracteristica: 'Signo de energía, acción y valentía.',
    descripcion: 'Las personas nacidas bajo el signo de Aries son conocidas por su naturaleza enérgica, su espíritu de acción y su valentía. Son líderes natos, emprendedores y siempre están listos para enfrentar nuevos desafíos. Aries es un signo de fuego que representa la pasión y la determinación.',
    elemento: 'Fuego',
    fecha_inicia: '21 de marzo',
    fecha_termina: '19 de abril',
    ruta_img: 'aries.png'
  },
  {
    signo: 'tauro',
    caracteristica: 'Signo de estabilidad, sensualidad y perseverancia.',
    descripcion: 'Las personas nacidas bajo el signo de Tauro son conocidas por su naturaleza estable, su sensualidad y su perseverancia. Son prácticas, leales y tienen una fuerte conexión con la naturaleza. Tauro es un signo de tierra que representa la estabilidad y el placer sensorial.',
    elemento: 'Tierra',
    fecha_inicia: '20 de abril',
    fecha_termina: '20 de mayo',
    ruta_img: 'tauro.png'
  },
  {
    signo: 'geminis',
    caracteristica: 'Signo de versatilidad, curiosidad y comunicación.',
    descripcion: 'Las personas nacidas bajo el signo de Géminis son conocidas por su naturaleza versátil, su curiosidad insaciable y su habilidad para comunicarse. Son sociables, inteligentes y tienen una mente ágil. Géminis es un signo de aire que representa la adaptabilidad y la conexión mental.',
    elemento: 'Aire',
    fecha_inicia: '21 de mayo',
    fecha_termina: '20 de junio',
    ruta_img: 'geminis.png'
  },
  {
    signo: 'cancer',
    caracteristica: 'Signo de sensibilidad, intuición y protección.',
    descripcion: 'Las personas nacidas bajo el signo de Cáncer son conocidas por su naturaleza sensible, su intuición aguda y su deseo de proteger a sus seres queridos. Son leales, emocionales y tienen una profunda conexión con el hogar y la familia. Cáncer es un signo de agua que representa la emotividad y la seguridad emocional.',
    elemento: 'Agua',
    fecha_inicia: '21 de junio',
    fecha_termina: '22 de julio',
    ruta_img: 'cancer.png'
  },
  {
    signo: 'leo',
    caracteristica: 'Signo de liderazgo, creatividad y generosidad.',
    descripcion: 'Las personas nacidas bajo el signo de Leo son conocidas por su naturaleza carismática, su creatividad y su generosidad. Son líderes naturales, apasionados y siempre buscan destacar en todo lo que hacen. Leo es un signo de fuego que representa la autoridad y el brillo personal.',
    elemento: 'Fuego',
    fecha_inicia: '23 de julio',
    fecha_termina: '22 de agosto',
    ruta_img: 'leo.png'
  },
  {
    signo: 'virgo',
    caracteristica: 'Signo de perfeccionismo, organización y análisis.',
    descripcion: 'Las personas nacidas bajo el signo de Virgo son conocidas por su naturaleza perfeccionista, su habilidad para organizar y su enfoque en los detalles. Son prácticas, trabajadoras y siempre buscan mejorar en todo lo que hacen. Virgo es un signo de tierra que representa la precisión y la eficiencia.',
    elemento: 'Tierra',
    fecha_inicia: '23 de agosto',
    fecha_termina: '22 de septiembre',
    ruta_img: 'virgo.png'
  },
  {
    signo: 'libra',
    caracteristica: 'Signo de equilibrio, armonía y justicia.',
    descripcion: 'Las personas nacidas bajo el signo de Libra son conocidas por su naturaleza equilibrada, su búsqueda de armonía y su sentido de la justicia. Son diplomáticas, sociables y tienen una gran habilidad para resolver conflictos. Libra es un signo de aire que representa la belleza y las relaciones.',
    elemento: 'Aire',
    fecha_inicia: '23 de septiembre',
    fecha_termina: '22 de octubre',
    ruta_img: 'libra.png'
  },
  {
    signo: 'escorpio',
    caracteristica: 'Signo de pasión, intensidad y transformación.',
    descripcion: 'Las personas nacidas bajo el signo de Escorpio son conocidas por su naturaleza apasionada, su intensidad emocional y su habilidad para transformarse a sí mismas. Son valientes, decididas y siempre buscan profundizar en todo lo que hacen. Escorpio es un signo de agua que representa la profundidad y el poder emocional.',
    elemento: 'Agua',
    fecha_inicia: '23 de octubre',
    fecha_termina: '21 de noviembre',
    ruta_img: 'escorpio.png'
  },
  {
    signo: 'sagitario',
    caracteristica: 'Signo de aventura, optimismo y expansión.',
    descripcion: 'Las personas nacidas bajo el signo de Sagitario son conocidas por su naturaleza aventurera, su optimismo y su deseo de expansión. Son viajeros, filósofos y siempre están buscando nuevas experiencias y conocimientos. Sagitario es un signo de fuego que representa la libertad y la búsqueda del sentido de la vida.',
    elemento: 'Fuego',
    fecha_inicia: '22 de noviembre',
    fecha_termina: '21 de diciembre',
    ruta_img: 'sagitario.png'
  },
  {
    signo: 'capricornio',
    caracteristica: 'Signo de ambición, disciplina y perseverancia.',
    descripcion: 'Las personas nacidas bajo el signo de Capricornio son conocidas por su naturaleza ambiciosa, su disciplina y su determinación para alcanzar sus metas. Son responsables, prácticas y siempre están dispuestas a trabajar arduamente para lograr el éxito. Capricornio es un signo de tierra que representa la autoridad y el logro.',
    elemento: 'Tierra',
    fecha_inicia: '22 de diciembre',
    fecha_termina: '19 de enero',
    ruta_img: 'capricornio.png'
  },
  {
    signo: 'acuario',
    caracteristica: 'Signo de originalidad, independencia y humanitarismo.',
    descripcion: 'Las personas nacidas bajo el signo de Acuario son conocidas por su naturaleza original, su independencia y su enfoque en el bienestar de la humanidad. Son visionarias, creativas y siempre buscan romper las normas establecidas. Acuario es un signo de aire que representa la innovación y la comunidad.',
    elemento: 'Aire',
    fecha_inicia: '20 de enero',
    fecha_termina: '18 de febrero',
    ruta_img: 'acuario.png'
  },
  {
    signo: 'piscis',
    caracteristica: 'Signo de sensibilidad, espiritualidad y compasión.',
    descripcion: 'Las personas nacidas bajo el signo de Piscis son conocidas por su naturaleza sensible, su espiritualidad y su capacidad para conectar con las emociones de los demás. Son compasivas, imaginativas y siempre están dispuestas a ayudar a los demás. Piscis es un signo de agua que representa la intuición y la empatía.',
    elemento: 'Agua',
    fecha_inicia: '19 de febrero',
    fecha_termina: '20 de marzo',
    ruta_img: 'piscis.png'
  }
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
    return 1;
  }
  return 0;
};

seedSignos();
