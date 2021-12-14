const {Router} = require('express')
const router = Router();
const placesController = require('./controller')

//Get departments
router.get('/departments',placesController.getDepartments)
//Obtener ciudades dependiendo a departamento
router.get('/cities:id',placesController.getCities)


module.exports = router