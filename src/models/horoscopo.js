import mongoose from "mongoose";


export const horoscopoSchema = mongoose.Schema({
    fecha: { 
        type: Date,
        required: true
    },
    signo: {
        type: String,
        required: true
    },
    horoscopo: {
        type: String,
        required: true
    },    
    numSuerte: {
        type: [Number], 
        required: true
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
        default: Date.now 
    }
});



//module.exports = mongoose.model('horoscopoShcema', horoscopoShcema);