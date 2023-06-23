import mongoose from "mongoose";

export const SignoSchema = mongoose.Schema({
  signo: {
    type: String,
    required: true,
  },
  caracteristica: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  elemento: {
    type: String,
    required: true,
  },
  fecha_inicia: {
    type: String,
    required: true,
  },
  fecha_termina: {
    type: String,
    required: true,
  },
  ruta_img: {
    type: String,
    required: true,
  },
});

SignoSchema.index({ signo: "text" });

export const Signo = mongoose.model("Signo", SignoSchema);