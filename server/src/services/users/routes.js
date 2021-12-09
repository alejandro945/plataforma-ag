const { Router } = require('express')
const router = Router();
const authorize = require('../../middleware/authorize')
const userController = require('./controller')
const Role = require('../../helpers/role')

router.get('/',authorize(Role.Admin), userController.getUsers)
router.get('/:id',userController.getById)
router.post('/auth',userController.authenticate)
router.post('/register',userController.register)

module.exports = router