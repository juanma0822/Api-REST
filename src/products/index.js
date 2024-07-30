const express = require('express');

const {ProductsController} = require('./controller')
//Manejar rutas del modulo independientemente la aplicacion
const router= express.Router();

module.exports.ProductsAPI= (app) =>{
    router.get('/', ProductsController.getProducts) // http://localhost::3000/api/products/
    router.get('/report', ProductsController.generateReport)
    router.get('/:id', ProductsController.getProduct)// http://localhost::3000/api/products/23
    router.post('/', ProductsController.createProduct)
    app.use('/api/products', router)
}