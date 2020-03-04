const router = require('express').Router()
const {Pokemon} = require('../models')

//get all pokemon
router.get('/pokemons', (req, res) => {
  Pokemon.findAll()
  .then(pokemon => {
    res.json(pokemon)
  })
  .catch(error => console.error(error))
})

//create a pokemon
router.post('/pokemons', (req, res) => {
  Pokemon.create(req.body)
  .then(() => res.sendStatus(200))
  .catch(error => console.error(error))
})

//update a pokemon
router.put('/pokemons/:id', (req, res) => {
  Pokemon.update(req.body, {where: {id: req.params.id}})
  .then(() => res.sendStatus(200))
  .catch(error => console.error(error))
})

//delete a pokemon
router.delete('/pokemons/:id', (req, res) => {
  Pokemon.destroy({where: {id: req.params.id}})
  .then(() => res.sendStatus(200))
  .catch(error => console.error(error))
})

module.exports = router