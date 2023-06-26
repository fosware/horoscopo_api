import {config} from 'dotenv'
config()
export const PORT = process.env.PORT || 3000
export const MONGO_DB = process.env.MONGODB_URI
