const router = require('express').Router()
const { Pokemon } = require('../models')

// GET all pokemon
router.get('/pokemon', (req, res) => {
  Pokemon.findAll()
    .then(pokemon => res.json(pokemon))
    .catch(e => console.error(e))
})

//GET one pokemon
router.get('/pokemon/:id', (req, res) => Pokemon.findOne({
  where: {
    id: req.params.id
  }
})
  .then(pokemon => res.json(pokemon))
  .catch(e => console.error(e))
)

module.exports = router