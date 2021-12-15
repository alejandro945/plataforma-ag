const {Router} = require('express')
const router = Router()
const individualController = require('./controller')

router.get('/',individualController.get)
router.get('/:id',individualController.getById)
router.post('/new',individualController.add)
router.put('/:id',individualController.update)
router.delete('/:id',individualController.remove)

module.exports= router;