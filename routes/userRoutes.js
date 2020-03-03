const router = require('express').Router()
const Model = require('../models/***')

// GET all items
router.get('/user', (req, res) => {
  Model.findAll()
    .then(result => res.json(result))
    .catch(e => console.error(e))
})

// POST an item
router.post('/user', (req, res) => {
  Model.create(req.body)
    .then(_ => console.log('Created!'))
    .catch(e => console.error(e))
})

// PUT an item
router.put('/user', (req, res) => {
  Model.update({ req.body.*** }, { where: { ***SearchCondition*** } })
    .then(() => console.log('Updated!'))
    .catch(e => console.error(e))
})

// DELETE an item
router.delete('/user/:id', (req, res) => {
  Model.destroy({ where: { id: parseInt(req.params.id) } })
    .then(() => console.log('Deleted!'))
    .catch(e => console.error(e))
})

module.exports = router