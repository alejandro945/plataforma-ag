const conexion = require('../../db');

function saveCollaborator(colaborator, onResult) {
    conexion.query('INSERT INTO empleados SET ?', {
        nombre: colaborator.firstName, apellidos: colaborator.lastName, correo: colaborator.email, genero: colaborator.gender,
        tipo_id: colaborator.type_id, tipo_licencia: colaborator.type_license, numero_id: colaborator.number_id, telefono1: colaborator.phone1, telefono2: validation(colaborator.phone2),
        direccion: colaborator.address, salario: colaborator.salary, departamento: colaborator.department, ciudad: colaborator.city, nacimiento: colaborator.born, expedicion_id: colaborator.expedition,
        vencimiento_licencia: colaborator.licenseExpiration, estado: true
    }, (error, results) => {
        if (!error) {
            onResult(results)
        }
    })
}

function getColaborators(onResult) {
    conexion.query('SELECT * from empleados', (error, result) => {
        if (!error) {
            onResult(result)
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
    saveCollaborator,
    getColaborators
}