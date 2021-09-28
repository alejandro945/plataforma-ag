const {Router} = require('express')
const router = Router();
const placesController = require('./controller')
//Invocamos conexion a mysql
router.get('/departments',placesController.getDepartments)

//Obtener ciudades dependiendo a departamento
router.get('/cities:id',placesController.getCities)

//Guardar y Editar places
router.post('/save',placesController.saveDepartment)
router.post('/edit',placesController.editDepartment)

module.exports = router