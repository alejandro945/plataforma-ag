const jwt = require('jsonwebtoken');
const key = require('../../config/auth.config');
const conexion = require('../../db')
const bcrypt = require('bcryptjs')

function authenticate({ username, password }, onResult) {
    searchUser(username, (result) => {
        if (result && bcrypt.compareSync(password, result.contraseña)) {
            conexion.query(
                'UPDATE usuarios SET ultimo_ingreso = now() WHERE id = ?', result.id
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

function getUserById(id, onResult) {
    conexion.query('SELECT usuario,nombres,apellidos,role from usuarios WHERE id=?', id, (error, result) => {
        if (!error) {
            onResult(result);
        }
    })
}

function getUsers(onResult) {
    conexion.query('SELECT usuario,nombres,apellidos,role FROM usuarios', (error, result) => {
        if (!error) {
            onResult(result)
        }
    })
}

function newUser(user, onResult) {
    searchUser(user.username, result => {
        if (result) {
            onResult({ msg: "This email already in use." })
        } else {
            const hashPass = bcrypt.hashSync(user.password, 12);
            conexion.query(
                "INSERT INTO `usuarios`(`usuario`,`contraseña`,`role`,`nombres`,`apellidos`) VALUES(?,?,?,?,?)",
                [user.username, hashPass, user.role, user.name, user.lastName]
            );
            onResult({ msg: "You have successfully registered." })
        }
    })

}



module.exports = {
    authenticate,
    getUserById,
    getUsers,
    newUser
}