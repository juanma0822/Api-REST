const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");

const {Config} = require('../config')

//Crea la conexion mediante el cliente a la base de datos con las variables
//de entorno ya asignadas del mongoUri para el enlace y el mondoDbname para el nombre
var connection = null;
module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!connection) {
        const client = new MongoClient(Config.mongoUri);
        connection = await client.connect();
        debug('Nueva conexion realizada con MongoDB Atlas');
      }
      debug('Utilizando conexión');
      const db = connection.db(Config.mongoDbname);
      resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
  });
