const conexion = require('../../db');

function save(req, res) {
    const department_name = req.body.department_name;
    conexion.query('INSERT INTO departamentos SET ?', { department_name: department_name }, (error, results) => {
        if (error) {
            //Alerts sweet alert
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}

function update(req, res) {
    const id = req.body.id;
    const department_name = req.body.department_name;
    conexion.query('UPDATE departamentos SET ? WHERE id = ?', [{ department_name: department_name }, { id: id }], (error, results) => {
        if (error) {
            //Alerts sweet alert
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}

module.exports={
    save,
    update
};
