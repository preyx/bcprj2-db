const router = require('express').Router()
const { Pokemon } = require('../models')
const {Op} = require('sequelize')

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

//GET matchup pokemon
router.get('/pokemon/matchups/:id', (req, res) => Pokemon.findAll({
  where: {
    id: req.params.id
  },
  attributes: ['against_bug', 'against_dark', 'against_dragon', 'against_electric', 'against_fairy', 'against_fight', 'against_fire', 'against_flying', 'against_ghost', 'against_grass', 'against_ground', 'against_ice', 'against_normal', 'against_poison', 'against_psychic', 'against_rock', 'against_steel', 'against_water', 'base_total']
})
  .then(pokemon => {
    let matchups = pokemon[0].dataValues
    let goodMatchups = []
    let badMatchups = []
    let base_total = matchups.base_total
    delete matchups['base_total']
    for (element in matchups) {
      console.log(`${element}: ${matchups[element]}`)
      if (matchups[element] >= 2) {
        goodMatchups.push(element)
      }
      if (matchups[element] < 1) {
        badMatchups.push(element)
      }
    }
    goodMatchups = goodMatchups.map(element => {
      element = element.split('_')
      return element[1]
    })
    badMatchups = badMatchups.map(element => {
      element = element.split('_')
      return element[1]
    }) 
    Pokemon.findAll({
      where: {
        base_total: {
          [Op.gte]: base_total - 100
        },
        [Op.or]: [
          {type1: goodMatchups},
          {type2: goodMatchups}
        ]
      },
      order: [
        ['base_total', 'DESC']
      ]
    })
      .then(results => {
        res.json(results)
      })
  })
  .catch(e => console.error(e))
)

module.exports = router
