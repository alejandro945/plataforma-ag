const userProvider = require('./provider')
const Sequelize = require('sequelize')
const usuarios = require('../../db/models').User

function authenticate(req, res) {
    userProvider.authenticate(req.body, result => {
        console.log(result)
        if (result.state) {
            res.json(result).status(200);
        } else {
            res.sendStatus(500);
        }
    })
}

function getUsers(req, res) {
    userProvider.getUsers(result => {
        res.json(result);
    })
}

function getById(req, res) {
    const { id } = req.params;
    userProvider.getUserById(id, (result) => {
        res.json(result);
    })
}

async function register(req, res) {
    return usuarios.findOrCreate({
        where: {
            usuario: req.params.username,
        },
        username: req.params.username,
        status: req.params.status
    })
    .then(usuarios => res.status(200).send(usuarios))
    .catch(error => res.status(400).send(error))     
}

module.exports = {
    getUsers,
    getById,
    authenticate,
    register
}