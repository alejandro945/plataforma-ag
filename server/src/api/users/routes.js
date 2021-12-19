const { Router } = require('express')
const router = Router();
const authorize = require('../../middlewares/authorize')
const userController = require('./controller')
const { roles } = require('../../helpers')

router.get('/', authorize(roles.Admin), userController.get)
router.get('/:id', userController.getById)
router.post('/auth', userController.authenticate)
router.post('/new', userController.add)
router.put('/:id', userController.update)
router.delete('/:id', userController.remove)

module.exports = router