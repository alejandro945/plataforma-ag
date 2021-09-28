const jwt = require('jsonwebtoken');
const key = require('../../config/auth.config');
const conexion = require('../../database')
const bcrypt = require('bcryptjs')

function authenticate({ username, password }, onResult) {
    searchUser(username, (result) => {
        if (result) {
          //  setLastLogin(result.id);
            const token = jwt.sign({ sub: result.id, role: result.role }, key.secret);
         //   const { password, ...userWithoutPassword } = result;
            onResult({
                result,
                token
            });
        }
    });
    
}

function searchUser(username, onResult) {
    conexion.query('SELECT * FROM usuarios WHERE usuario = ?', username, (err, results) => {
        onResult(results[0]);
    })
}

function checkPassword(password, user) {
    bcrypt.compare(
        password,
        user.contraseña,
        (bErr, bResult) => {
            // wrong password
            if (bErr) {
                return ({
                    msg: 'Password is incorrect!'
                });
            } else if (bResult) {
                return (user);
            }
        }
    )
}

function setLastLogin(id) {
    conexion.query(
        `UPDATE usuarios SET ultimo_ingreso = now() WHERE id = ?`[id]
    );
}

function getUserById(id, onResult) {
    conexion.query('SELECT usuario,nombres,apellidos,role from usuarios WHERE id=?', id, (error, result) => {
        if (!error) {
            onResult(result);
        }
    })
}

module.exports = {
    authenticate,
    getUserById
}