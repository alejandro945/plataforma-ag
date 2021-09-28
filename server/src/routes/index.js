const { Router } = require('express');
//ejecutar router guardandolo
const router = Router();
//Invocamos dotenv variables de entrono
require('dotenv').config();
//Routes (Rest API)
const places = require('../apiServices/places/routes')
const vehicles = require('../apiServices/vehicles/routes')
const collaborators = require('../apiServices/collaborators/routes')
const users = require('../apiServices/users/routes')
//GET * Homepage
router.use('/places',places);
router.use('/vehicles',vehicles);
router.use('/collaborators',collaborators);
router.use('/users',users)

module.exports = router

