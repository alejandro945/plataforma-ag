const {Router} = require('express')
const router = Router();
const vehiclesController = require('./controller')

router.get('/',vehiclesController.get)

module.exports = router