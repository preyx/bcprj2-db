const router = require('express').Router()
const { User, Team } = require('../models')

// GET all users
router.get('/users', (req, res) => User.findAll({ include: [Team] })
  .then(users => res.json(users))
  .catch(e => console.error(e)))

// GET one user
router.get('/users/id', (req, res) => User.findOne({
  where: {
    id: req.params.id
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
router.put('/users/:id', (req, res) => User.update({
  where: {
    id: req.params.id
  },
  include: [Team]
})
  .then(user => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE a user
router.delete('/users/:id', (req, res) => User.destroy({
  where: {
    id: req.params.id
  }
})
  .then(user => res.sendStatus(200))
  .catch(e => console.error(e)))

module.exports = router