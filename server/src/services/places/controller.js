const conexion = require('../../database');
const placesProvider = require('./provider')


function getDepartments(req, res) {
    conexion.query('SELECT * FROM departamentos', (error, result) => {
        if (error) {
            console.log('OPPS SORRY MEN');
        } else {
            res.json(result);
        }
    })
}

function getCities(req, res) {
    const { id } = req.params
    conexion.query('SELECT id_city, city_name FROM ciudades WHERE id_department=?', [id], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.json(result);
        }
    })
}

function saveDepartment() {
    return placesProvider.save();
}

function editDepartment() {
    return placesProvider.update();
}

module.exports = {
    getDepartments,
    getCities,
    saveDepartment,
    editDepartment
};
