const jwt = require('jsonwebtoken');
const key = require('../../config/auth.config');
const conexion = require('../../db')
const bcrypt = require('bcryptjs')

function authenticate({ username, password }, onResult) {
    searchUser(username, (result) => {
        if (result && bcrypt.compareSync(password, result.contraseña)) {
            conexion.query(
                'UPDATE usuarios SET updatedAt = now() WHERE id = ?', result.id
            );
            const token = jwt.sign({ sub: result.id, role: result.role }, key.secret);
            const { contraseña, ...userWithoutPassword } = result;
            onResult({
                state:true,
                userWithoutPassword,
                token
            });
        }else{
            onResult({state:false});
        }
    });
}

function searchUser(username, onResult) {
    conexion.query('SELECT * FROM usuarios WHERE usuario = ?', username, (err, results) => {
        if (!err) {
            onResult(results[0]);
        }
    })
}

module.exports = {
    authenticate
}