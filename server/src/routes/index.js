const { Router } = require('express');
const errorHandler = require('../middlewares/error-handler');
//Inicializar el Router de Express
const router = Router();
//Routes (Rest API)
const places = require('../api/places/routes')
const vehicles = require('../api/vehicles/routes')
const collaborators = require('../api/collaborators/routes')
const users = require('../api/users/routes')
const empAgreements = require('../api/empAgreements/routes')
const individuals = require('../api/individuals/routes')
//GET * Api Services
router.use('/places', places);
router.use('/vehicles', vehicles);
router.use('/collaborators', collaborators);
router.use('/users', users);
router.use('/empAgreements', empAgreements);
router.use('/individuals', individuals);
//Not Found
router.get('*', (_, res) => { res.status(404).send({ error: 'Service Not Found' }) })
//General Middleware
router.use(errorHandler);

module.exports = router

