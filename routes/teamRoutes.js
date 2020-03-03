const router = require('express').Router()
const {Team} = require('../models')

// GET all items
router.get('/teams', (req, res) => {
  Team.findAll()
    .then(team => res.json(team))
    .catch(e => console.error(e))
})

// POST an item
router.post('/teams', (req, res) => {
  Team.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// PUT an item
router.put('/teams/:id', (req, res) => {
  Team.update(req.body, { where: {id: req.params.id}  })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// DELETE an item
router.delete('/teams/:id', (req, res) => {
  Team.destroy({ where: { id: parseInt(req.params.id) } })
    .then(() => console.log('Deleted!'))
    .catch(e => console.error(e))
})

module.exports = router