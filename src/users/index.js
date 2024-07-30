const express = require('express');

const {UsersController} = require('./controller')
//Manejar rutas del modulo independientemente la aplicacion
const router= express.Router();

module.exports.UsersAPI= (app) =>{
    router.get('/', UsersController.getUsers) // http://localhost::3000/api/product
    router.get('/:id', UsersController.getUser)// http://localhost::3000/api/products/23
    router.post('/', UsersController.createUser)
    app.use('/api/users', router)
}