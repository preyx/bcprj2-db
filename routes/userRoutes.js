const router = require('express').Router()
const { User, Team, Pokemon } = require('../models')

// GET all users
router.get('/users', (req, res) =>{
  User.findAll({include: [{
      model: Team,
    include: [
      { model: Pokemon, as: 'pokemon1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
      { model: Pokemon, as: 'pokemon2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
      { model: Pokemon, as: 'pokemon3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
      { model: Pokemon, as: 'enemy1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
      { model: Pokemon, as: 'enemy2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] },
      { model: Pokemon, as: 'enemy3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }]
    }]
  })
  .then(users => res.json(users))
  .catch(e => res.sendStatus(400))
}) 

// GET one user
router.get('/users/:id', (req, res) => User.findOne({
  where: {
    id: req.params.id
  },
  include: [{
    model: Team,
    include: [
    { model: Pokemon, as: 'pokemon1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }, 
    { model: Pokemon, as: 'pokemon2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }, 
    { model: Pokemon, as: 'pokemon3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }, 
    { model: Pokemon, as: 'enemy1', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }, 
    { model: Pokemon, as: 'enemy2', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }, 
    { model: Pokemon, as: 'enemy3', attributes: ['name', 'hp', 'attack', 'sp_attack', 'defense', 'sp_defense', 'speed', 'base_total'] }
  ]
  }]
})
  .then(user => res.json(user))
  .catch(e => res.sendStatus(400)))

// POST a user
router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => res.sendStatus(400))
)

// PUT a user
router.put('/users/:id', (req, res) => User.update({
  where: {
    id: req.params.id
  },
  include: [Team]
})
  .then(user => res.sendStatus(200))
  .catch(e => res.sendStatus(400))
)

// DELETE a user
router.delete('/users/:id', (req, res) => User.destroy({
  where: {
    id: req.params.id
  }
})
  .then(user => res.sendStatus(200))
  .catch(e => res.sendStatus(400))
)

module.exports = router