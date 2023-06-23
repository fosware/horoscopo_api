import mongoose from "mongoose";


export const HoroscopoSchema = mongoose.Schema({
    fecha: {
      type: Date,
      required: true,
    },
    signo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Signo",
      required: true,
    },
    horoscopo: {
      type: String,
      required: true,
    },
    numSuerte: {
      type: [Number],
      required: true,
    },
    compatibleCon: {
      type: [String],
      required: true,
    },
    colorDia: {
      type: [String],
      required: true,
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });
  
  HoroscopoSchema.index({ signo: "text" });
  
  export const Horoscopo = mongoose.model("Horoscopo", HoroscopoSchema);
  