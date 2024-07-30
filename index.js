const express = require('express');
const debug = require('debug')('app:main');

//Para hacer llamados de otros archivos primero hacer la extracción en la derecha 
const {Config} = require('./src/config')
const {ProductsAPI} = require('./src/products');
const {UsersAPI} = require("./src/users")
const { IndexAPI, NotFoundAPI} = require('./src/index');

const app= express();

app.use(express.json());

//- Modules
IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundAPI(app);

app.listen(Config.port, ()=> {
    debug(`Servidor escuchando en el puerto ${Config.port}`)
})