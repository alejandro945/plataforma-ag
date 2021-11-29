const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    socketPath: process.env.DB_SOCKET
})

conexion.connect((error) => {
    if (error) {
        console.error('Conection Error is: ' + error);
    } else {
        console.log('Conected to MYSQL');
    }
});

module.exports = conexion;

