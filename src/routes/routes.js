const express = require('express');
const routes = express.Router();

const rotasController = require('../controller/crud.js');

routes.get('/', rotasController.index);
routes.post('/', rotasController.poster);
routes.get('/:id', rotasController.getId);

module.exports = routes;