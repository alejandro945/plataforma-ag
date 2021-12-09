const conexion = require('../../db/index');

//Invocamos conexion a mysql
function getVehicles (req, res) {
    conexion.query('SELECT * FROM vehiculos', (error, result) => {
        if (error) {
            console.log('OPPS SORRY MEN');
        } else {
            res.json(result);
        }
    })
}

//Invocamos rutas llamadas desde fronted
//Ruta para crear
//router.get('/create', (req, res) = {

//})

//Ruta para editar
function upload (req, res) {
    const { id } = req.params;
    conexion.query('SELECT FROM vehiculos WHERE id=?', [id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            //renderiza el formulario res.render('edit',{users:results[0]})
        }
    });
}
//Ruta para eliminar
function remove (req,res){
    const {id} = req.params;
    conexion.query('REMOVE FROM vehiculos WHERE id = ?', [id], (error, results) => {
        if (error) {
            //Alerts sweet alert
            console.log(error);
        } else { 
            //succes alert
            res.redirect('/');
        }
    })
}

//Export enrutador
module.exports = {
    getVehicles,
    upload,
    remove
};