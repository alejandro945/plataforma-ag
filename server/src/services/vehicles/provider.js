const conexion = require('../../database');
//enviar resultados a pagina renderixada con res.render(index,{results:results})
exports.save = (req, res) => {
    const brand = req.body.brand;
    const model = req.body.model;
    const plate = req.body.plate;
    conexion.query('INSERT INTO vehiculos SET ?', { brand: brand, model: model, plate: plate }, (error, results) => {
        if (error) {
            //Alerts sweet alert
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}
exports.update = (req, res) => {
    const id = req.body.id;
    const brand = req.body.brand;
    const model = req.body.model;
    const plate = req.body.plate;
    conexion.query('UPDATE vehiculos SET ? WHERE id = ?', [{ brand: brand, model: model, plate: plate},{id:id}], (error, results) => {
        if (error) {
            //Alerts sweet alert
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}