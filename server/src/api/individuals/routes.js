const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.post('/new', controller.add)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router;