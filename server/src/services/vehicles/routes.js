const {Router} = require('express')
const router = Router();
const vehiclesController = require('./controller')

router.get('/',vehiclesController.getVehicles)

module.exports = router