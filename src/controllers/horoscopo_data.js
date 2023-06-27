// controllers/horoscopo_data.js

import axios from "axios";
import cheerio from "cheerio";

export async function horoscopoData(signo) {
  try {
    const url = `https://www.loshoroscopos.es/horoscopo-diario/${signo}.php`;
    // Realizar la solicitud HTTP al sitio web
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Obtener el texto del horóscopo y eliminar las etiquetas <br>
    const horoscopo = $(".h2-content")
      .parent()
      .contents()
      .filter(function () {
        return this.nodeType === 3;
      })
      .text()
      .trim();

    // Obtener el día del horóscopo y limpiar los caracteres no deseados
    const dia = $(".date").text().replace(/,\s*/, "").trim();

    // Obtener los demás datos del horóscopo y limpar
    const nombreSigno = $(".img-content .blue")
      .text()
      .replace(/\s+/g, " ")
      .replace(/,\s*$/, "")
      .replace(/\.\s*$/, "")
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    
    const numerosSuerte = $(".amp-mt div:nth-child(1) span")
      .text()
      .replace(/\s+/g, " ")
      .replace(/,\s*$/, "")
      .replace(/\.\s*$/, "")
      .trim();
    const compatibleCon = $(".amp-mt div:nth-child(2) span")
      .text()
      .replace(/\s+/g, " ")
      .replace(/,\s*$/, "")
      .replace(/\.\s*$/, "")
      .trim();
    const colorDia = $(".amp-mt div:nth-child(3) span")
      .text()
      .replace(/\s+/g, " ")
      .replace(/,\s*$/, "")
      .replace(/\.\s*$/, "")
      .trim();

    const horoscopoData = {
      signo: nombreSigno,
      horoscopo,
      dia,
      numerosSuerte,
      compatibleCon,
      colorDia,
    };
    return horoscopoData;
  } catch (error) {
    console.log("Error al obtener el horóscopo:", error);
    return "Ocurrió un error al obtener el horóscopo";
  }
}
