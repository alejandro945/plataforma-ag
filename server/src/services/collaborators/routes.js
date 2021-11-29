const {Router} = require('express')
const router = Router()
const collaboratorController = require('./controller')

router.get('/',collaboratorController.getColaborators)
router.post('/save',collaboratorController.addCollaborator)

module.exports= router;