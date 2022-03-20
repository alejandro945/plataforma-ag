const { Router } = require('express')
const router = Router()
const asyncHandler = require('express-async-handler')
const db = require('../db/models');
const BasicService = require('../services/BasicService');
const service = new BasicService(db.Employee);

router.get('/', asyncHandler(get))
router.get('/:id', asyncHandler(getById))
router.post('/new', asyncHandler(add))
router.put('/:id', asyncHandler(update))
router.delete('/:id', asyncHandler(remove))

async function get(_, res) {
    const results = await service.get()
    res.status(200).json(results)
}

async function getById(req, res) {
    const { id } = req.params;
    const results = await service.getById(id)
    res.status(200).json(results)
}

async function add(req, res) {
    const newEmployee = req.body;
    const results = await service.add(newEmployee)
    res.status(200).json(results)
}

async function update(req, res) {
    const { id } = req.params;
    const results = await service.update(id, req.body)
    res.status(200).json(results)
}

async function remove(req, res) {
    const { id } = req.params;
    const results = await service.remove(id)
    res.status(200).json(results)
}

module.exports = router;