const db = require('../../db/models')
const jwt = require('jsonwebtoken');
const key = require('../../config/auth.config');
const bcrypt = require('bcryptjs');

function authenticate(req, res) {
    db.User.findOne({where: {usuario: req.body.username}})
        .then(results => {
            if (bcrypt.compareSync(req.body.password, results.contraseña)) {
                results.changed('updatedAt', true)
                results.save()
                const token = jwt.sign({ sub: results.id, username: results.usuario, role: results.role }, key.secret, { expiresIn: '12hr' });
                const { contraseña, ...userWithoutPassword } = results.dataValues;
                res.status(200).json({ userWithoutPassword, token });
            } else {
                res.sendStatus(400);
            }
        })
        .catch(error => res.status(500).send(error))
}

function getById(req, res) {
    const { id } = req.params;
    db.User.findOne({where: {id: id},attributes: { exclude: ['contraseña'] }})
        .then(results => res.status(200).send(results))
        .catch(error => res.status(400).send(error))
}

function get(_, res) {
    return db.User
        .findAll({ attributes: { exclude: ['contraseña'] } })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

function add(req, res) {
    return db.User.findOrCreate({where: {usuario: req.body.username,},defaults: req.body})
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

async function update(req, res) {
    const { id } = req.params;
    const data = req.body
    const prev = await db.User.findByPk(id);
    const exists = await db.User.findOne({ where: { usuario: data.usuario } });
    if ((prev.usuario == data.usuario) || !exists) {
        db.User.update(data, { where: { id: id } })
            .then(results => res.status(200).json(results))
            .catch(error => res.status(500).send(error))
    } else {
        res.sendStatus(400)
    }
}

function remove(req, res) {
    const { id } = req.params;
    db.User.destroy({ where: { id: id } })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(500).send(error))
}

module.exports = {
    getById,
    authenticate,
    get,
    add,
    update,
    remove
}