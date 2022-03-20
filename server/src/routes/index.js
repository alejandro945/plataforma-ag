const { Router } = require('express');
const errorHandler = require('../middlewares/error-handler');
//Inicializar el Router de Express
const router = Router();
//Routes (Rest API)
const places = require('../controllers/places/routes')
const vehicles = require('../controllers/vehicles/routes')
const collaborators = require('../controllers/collaborators')
const users = require('../controllers/users/routes')
const empAgreements = require('../controllers/empAgreements/routes')
const individuals = require('../controllers/individuals');
//GET * Api Services
router.use('/places', places);
router.use('/vehicles', vehicles);
router.use('/collaborators', collaborators);
router.use('/users', users);
router.use('/empAgreements', empAgreements);
router.use('/individuals', individuals);
//Not Found
router.get('*', (_, res) => { res.status(404).send({ error: 'Service Not Found' }) })
//General Middlewares
router.use(errorHandler);

module.exports = router

