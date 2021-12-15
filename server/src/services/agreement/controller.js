const db = require('../../db/models');

function get(_, res) {
    db.Agreement.findAll()
        .then(results => res.status(200).send(results))
        .catch(error => res.status(400).send(error))
}

function getById(req, res, next) {
    const { id } = req.params;
    db.Agreement.findOne({ where: { id: id } })
        .then(results => res.status(200).send(results))
        .catch(error => next(error))
}

function add(req, res, next) {
    const newAgreement = req.body;
    db.Agreement.findOrCreate({ where: { id: newAgreement.id, }, defaults: newAgreement })
        .then(results => res.status(200).json(results))
        .catch(error => next(error))
}

function update(req, res) {
    const { id } = req.params;
    db.Agreement.update(req.body, { where: { id: id } })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

function remove(req, res) {
    const { id } = req.params;
    db.Agreement.destroy({ where: { id: id } })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(500).send(error))
}

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}