const conexion = require('../../db/index');

//Invocamos conexion a mysql
function get (_, res) {
    conexion.query('SELECT * FROM vehiculos', (error, result) => {
        if (error) {
            console.log('OPPS SORRY MEN');
        } else {
            res.json(result);
        }
    })
}



//Export enrutador
module.exports = {
    get
};