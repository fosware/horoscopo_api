import app from './app.js'
import {PORT} from './config.js'
import bodyParser from 'body-parser'
app.listen(PORT)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  
console.log('Server running on port ', PORT)