const {Router} = require('express');

const productsController = require('./controllers/productsController')
const routes = Router();

routes.post('/produtos', productsController.create)
routes.get('/produtos', productsController.listAll)
routes.get('/produtos/:id', productsController.listOne)
routes.delete('/produtos/:id', productsController.delete)


  module.exports = routes;