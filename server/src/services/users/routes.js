const { Router } = require('express')
const router = Router();
const authorize = require('../../middleware/authorize')
const userController = require('./controller')
const Role = require('../../helpers/role')

router.get('/',authorize(Role.Admin), userController.get)
router.get('/:id',userController.getById)
router.post('/auth',userController.authenticate)
router.post('/new',userController.add)
router.put('/:id',userController.update)
router.delete('/:id',userController.destroy)

module.exports = router