const conexion = require('../../database');

function saveCollaborator(req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const gender = req.body.gender
    const type_id = req.body.type_id
    const type_license = req.body.type_license
    const number_id = req.body.number_id
    const phone1 = req.body.phone1
    const phone2 = validation(req.body.phone2);
    const address = req.body.address
    const salary = req.body.salary
    const department = req.body.department
    const city = req.body.city
    const born = req.body.born
    const expedition = req.body.expedition
    const licenseExpiration = req.body.licenseExpiration

    conexion.query('INSERT INTO empleados SET ?', { nombre: firstName, apellidos: lastName, correo: email, genero: gender, 
        tipo_id: type_id, tipo_licencia: type_license, numero_id: number_id, telefono1: phone1, telefono2: phone2, 
        direccion: address, salario: salary, departamento: department, ciudad: city, nacimiento: born, expedicion_id: expedition, 
        vencimiento_licencia: licenseExpiration }, (error, results) => {
        if (error) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
}

function validation(input) {
    if (input === '') {
        return 0;
    } else {
        return input;
    }
}

module.exports = {
    saveCollaborator
}