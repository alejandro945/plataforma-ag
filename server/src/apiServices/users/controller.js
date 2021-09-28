const conexion = require('../../database')
const userProvider = require('./provider')

function authenticate(req, res, next) {
    console.log(req.body.username);
    userProvider.authenticate(req.body,result=>{
        res.json(result);
        })
}

function getUsers(req, res) {
    conexion.query('SELECT * FROM usuarios', (error, result) => {
        if (error) {
            console.log(error)
        } else {
            res.json(result)
        }
    })
}

function getById(req, res) {
    const { id } = req.params;
    userProvider.getUserById(id, (result) => {
        res.json(result);
    })
}

module.exports = {
    getUsers,
    getById,
    authenticate
}