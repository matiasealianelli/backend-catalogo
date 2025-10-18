import mongoose from 'mongoose'
import { MONGODB_URI, DB } from './config.js'


// Creamos la conexion de la base de datos
export const connectDB = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI no está definida en el entorno');
    }

    // Asegurarnos de que la URI tenga esquema válido
    if (!/^mongodb(\+srv)?:\/\//.test(MONGODB_URI)) {
      throw new Error('MONGODB_URI inválida: debe empezar con "mongodb://" o "mongodb+srv://"');
    }

    // Si DB está definida, pasarla como dbName en options para evitar concatenaciones erróneas
    const options = {};
    if (DB) options.dbName = DB;

    await mongoose.connect(MONGODB_URI, options);
    console.log('DB connected');
  } catch (error) {
    console.error('Error connecting to database:', error.message || error);
    process.exit(1);
  }
}

export default connectDB;