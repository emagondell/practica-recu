var express = require('express');
var router = express.Router();
const indexController = require ('../controller/indexController')


/* GET home page. */
router.get('/', indexController.index); //todas las peliculas(/movies)
router.get('/detalle/:id', indexController.detalle)
router.get('/new', indexController.new)
router.get('/recommended', indexController.recommended)

module.exports = router;
