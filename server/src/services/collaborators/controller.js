const conexion = require('../../database')
const collaboratorModel = require('./model')

function getColaborators(req, res) {
    conexion.query('SELECT * from empleados', (error, result) => {
        if (error) {
            res = error;
        } else {
            res.json(result)
        }
    })
}

function saveCollaborator(req,res) {
    return collaboratorModel.saveCollaborator(req,res);
}

module.exports = {
    getColaborators,
    saveCollaborator
}