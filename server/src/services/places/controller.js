const db = require('../../db/models')

function getDepartments(_, res) {
    db.Department.findAll()
        .then(results => res.status(200).json(results))
        .catch(error => res.status(500).send(error))
}

function getCities(req, res) {
    const { id } = req.params
    db.City.findAll({ where: { department_id: id }, include: 'Department' })
        .then(results => res.status(200).json(results))
        .catch(error => res.status(500).send(error))
}

module.exports = {
    getDepartments,
    getCities
};
