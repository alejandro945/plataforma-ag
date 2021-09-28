const userProvider = require('./provider')

function authenticate(req, res) {
    userProvider.authenticate(req.body, result => {
        res.json(result);
    })
}

function getUsers(req, res) {
    userProvider.getUsers(result => {
        res.json(result);
    })
}

function getById(req, res) {
    const { id } = req.params;
    userProvider.getUserById(id, (result) => {
        res.json(result);
    })
}

function register(req, res) {
    const user = req.body;
    userProvider.newUser(user, result=>{
        res.json(result)
    })
}

module.exports = {
    getUsers,
    getById,
    authenticate,
    register
}