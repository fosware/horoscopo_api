import mongoose from 'mongoose'
import {MONGO_DB} from './config.js'

/* import postgres from 'postgres'
import {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE} from './config.js'

export const pool = postgres ({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

 */

// MongoDB
export const pool = mongoose
    .connect(MONGO_DB)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.log(error) );
  