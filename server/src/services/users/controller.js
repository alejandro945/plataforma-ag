const userProvider = require('./provider')
const db = require('../../db/models')

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

function getUsers(_, res) {
    return db.User
        .findAll({ attributes: {exclude: ['contraseña']}})
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

function getById(req, res) {
    const { id } = req.params;
    return db.User
    .findOne({
        where: {
            id: id
        },
        attributes: {exclude: ['contraseña']}
    })
    .then(results => res.status(200).send(results))
    .catch(error => res.status(400).send(error))
}

function addUser(req, res) {
    return db.User.findOrCreate({
        where: {
            usuario: req.body.username,
        },
        defaults: {
            usuario: req.body.username,
            contraseña: req.body.password,
            role: req.body.role,
            nombres: req.body.name,
            apellidos: req.body.lastName
        }
    })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

module.exports = {
    getUsers,
    getById,
    authenticate,
    addUser
}