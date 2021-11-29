const conexion = require('../../database')
const collaboratorProvider = require('./provider')

function getColaborators(req, res) {
    collaboratorProvider.getColaborators(result => { 
        if (result) {
            res.json(result).status(200)
        } else {
            res.sendStatus(500)
        }
    })
}

function addCollaborator(req, res) {
    collaboratorProvider.saveCollaborator(req.body, result => {
        if (result.state) {
            res.json(result).status(200)
        } else {
            res.senStatus(500)
        }
    });
}

module.exports = {
    getColaborators,
    addCollaborator
}