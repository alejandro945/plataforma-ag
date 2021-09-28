//Ask data from website
const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const data = require("../data.json");
const _ = require('underscore');

//console.log(data); print array object in json format
//Postman for operation in app web
router.get('/', (req, res) => {
    res.json(data);
});

//express validator for all data middleware
//Codigos de estado 200(OK) and 500(ERROR)
router.post('/', (req, res) => {
    const { Marca, Modelo, Placa } = req.body;
    if (Marca && Modelo && Placa) {
        var id = data.length + 1;
        const newBus = { id, ...req.body };
        data.push(newBus);
        res.json(data);
    } else {
        res.status(500).send('Empty Fields');
    }
});

//underscore para recorrer un areglo o objeto y eliminarlo
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(data, (bus, i) => {
        if (bus.Id == id) {
            data.splice(i, 1);
        }
    });
    res.json(data);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Marca, Modelo, Placa } = req.body;
    if (Marca && Modelo && Placa) {
        _.each(data, (bus, i) => {
            if (bus.Id == id) {
                bus.Marca = Marca;
                bus.Modelo = Modelo;
                bus.Placa = Placa;
            }
        });
        res.json(data);
    } else {
        res.status(500).send({ error: 'Empty Fields' });
    }
})

router.get('/', async (req, res) => {
    //Peticion asincrona se demora para pedir los datos
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Convertimos a json
    const users = await response.json();
    res.json(users);
});

module.exports = [
    
];


