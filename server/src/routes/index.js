const { Router } = require('express');
//ejecutar router guardandolo
const router = Router();
//Invocamos dotenv variables de entrono
require('dotenv').config();
//Routes (Rest API)
const places = require('../services/places/routes')
const vehicles = require('../services/vehicles/routes')
const collaborators = require('../services/collaborators/routes')
const users = require('../services/users/routes')
const empAgreements = require('../services/empAgreements/routes')
const individuals = require('../services/individuals/routes')
//GET * Pages
router.use('/places',places);
router.use('/vehicles',vehicles);
router.use('/collaborators',collaborators);
router.use('/users',users);
router.use('/empAgreements',empAgreements);
router.use('/individuals',individuals);

module.exports = router

