const {Router} = require('express')
const router = Router()
const agreementController = require('./controller')

router.get('/',agreementController.get)
router.get('/:id',agreementController.getById)
router.post('/new',agreementController.add)
router.put('/:id',agreementController.update)
router.delete('/:id',agreementController.remove)

module.exports= router;