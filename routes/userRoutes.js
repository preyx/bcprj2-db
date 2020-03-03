const router = require('express').Router()
const { User, Team } = require('../models')

// GET all users
router.get('/users', (req, res) => User.findAll({ include: [Team] })
  .then(users => res.json(users))
  .catch(e => console.error(e)))

// GET one user
router.get('/users/:username', (req, res) => User.findOne({
  where: {
    username: req.params.username
  },
  include: [Team]
})
  .then(user => res.json(user))
  .catch(e => console.error(e)))

// POST a user
router.post('/users', (req, res) => User.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// PUT a user
router.put('/users/:username', (req, res) => User.update({
  where: {
    username: req.params.username
  },
  include: [Team]
})
  .then(user => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE a user
router.delete('/users/:username', (req, res) => User.destroy({
  where: {
    username: req.params.username
  }
})
  .then(user => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router