const router = require('express').Router()
const {Team, User, Pokemon} = require('../models')

// GET all items
router.get('/teams', (req, res) => {
  Team.findAll({include:[
    { model: Pokemon, as: 'pokemon1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'pokemon2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'pokemon3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'enemy1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'enemy2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'enemy3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    User
  ]})
    .then(team => res.json(team))
    .catch(e => console.error(e))
})

//get one team by id
router.get('/teams/:id', (req, res) => Team.findOne({
  where: {
    id: req.params.id
  },
  include: [
    { model: Pokemon, as: 'pokemon1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'pokemon2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'pokemon3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'enemy1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'enemy2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    { model: Pokemon, as: 'enemy3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
    User
  ]
})
  .then(user => res.json(user))
  .catch(e => console.error(e)))

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