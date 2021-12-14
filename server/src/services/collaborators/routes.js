const {Router} = require('express')
const router = Router()
const collaboratorController = require('./controller')

router.get('/',collaboratorController.get)
router.get('/:id',collaboratorController.getById)
router.post('/new',collaboratorController.add)
router.put('/:id',collaboratorController.update)
router.delete('/:id',collaboratorController.remove)

module.exports= router;