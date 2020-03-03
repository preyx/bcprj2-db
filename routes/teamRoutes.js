const router = require('express').Router()
const {Team} = require('../models')

// GET all teams
router.get('/teams', (req, res) => {
  Team.findAll()
    .then(team => res.json(team))
    .catch(e => console.error(e))
})

// POST a team
router.post('/teams', (req, res) => {
  Team.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// PUT a team
router.put('/teams/:id', (req, res) => {
  Team.update(req.body, { where: {id: req.params.id}  })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// DELETE a team
router.delete('/teams/:id', (req, res) => {
  Team.destroy({ where: { id: parseInt(req.params.id) } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

module.exports = router