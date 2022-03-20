const db = require('../../db/models')
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');
const bcrypt = require('bcryptjs');

function authenticate(req, res, next) {
    db.User.findOne({ where: { username: req.body.username } })
        .then(results => {
            console.log(results);
            if (bcrypt.compareSync(req.body.password, results.password)) {
                results.changed('updatedAt', true)
                results.save()
                const token = jwt.sign({ sub: results.id, username: results.username, role: results.role }, jwtSecret, { expiresIn: '12hr' });
                const { password, ...userWithoutPassword } = results.dataValues;
                res.status(200).json({ userWithoutPassword, token });
            } else {
                res.sendStatus(400).json({ message: 'Invalid user or password' });
            }
        })
        .catch(error => next(error))
}

function getById(req, res) {
    const { id } = req.params;
    db.User.findOne({ where: { id: id }, attributes: { exclude: ['contraseña'] } })
        .then(results => res.status(200).send(results))
        .catch(error => res.status(400).send(error))
}

function get(_, res, next) {
    db.User.get()
        .then(results => res.status(200).json(results))
        .catch(error => next(error))
}

function add(req, res) {
    db.User.findOrCreate({ where: { usuario: req.body.username, }, defaults: req.body })
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