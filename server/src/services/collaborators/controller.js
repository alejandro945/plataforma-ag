const db = require('../../db/models')

function get(_, res) {
    db.Employee.findAll()
        .then(results => res.status(200).send(results))
        .catch(error => res.status(400).send(error))
}

function getById(req, res) {
    const { id } = req.params;
    return db.Employee
        .findOne({
            where: {
                id: id
            }
        })
        .then(results => res.status(200).send(results))
        .catch(error => res.status(400).send(error))
}

function add(req, res) {
    const newEmployee = req.body;
    db.Employee.findOrCreate({ where: { id_number: newEmployee.id_number, }, defaults: newEmployee })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

function update(req, res) {
    const { id } = req.params;
    db.Employee.update(req.body, { where: { id: id } })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(400).send(error))
}

function remove(req, res) {
    const { id } = req.params;
    db.Employee.destroy({ where: { id: id } })
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