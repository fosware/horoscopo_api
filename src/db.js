import mongoose from 'mongoose'
import {MONGO_DB} from './config.js'

// MongoDB
export const pool = mongoose
    .connect(MONGO_DB)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.log(error) );
  