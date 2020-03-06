const router = require('express').Router()
const { Pokemon } = require('../models')
const { Op } = require('sequelize')
const pokemonGif = require('pokemon-gif')

// GET all pokemon
router.get('/pokemon', (req, res) => {
  Pokemon.findAll()
    .then(pokemon => res.json(pokemon))
    .catch(e => console.error(e))
})

//GET one pokemon
router.get('/pokemon/:name', (req, res) => Pokemon.findOne({
  where: {
    name: req.params.name
  }
})
  .then(pokemon => {
    let pokedexNum = pokemon.dataValues.pokedex_number
    let sprite = pokemonGif(pokedexNum)
    pokemon.dataValues.sprite = sprite
    res.json(pokemon)
  })
  .catch(e => res.sendStatus(400))
)

//GET matchup pokemon
router.get('/pokemon/matchups/:name', (req, res) => Pokemon.findAll({
  where: {
    name: req.params.name
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
      if (matchups[element] >= 2) {
        goodMatchups.push(element)
      }
      if (matchups[element] < 1) {
        badMatchups.push(element)
      }
    }
    goodMatchups = goodMatchups.map(element => {
      element = element.split('_')
      if (element[1] === 'fight') {
        element[1] = 'fighting'
      }
      return element[1]
    })
    badMatchups = badMatchups.map(element => {
      element = element.split('_')
      if (element[1] === 'fight') {
        element[1] = 'fighting'
      }
      return element[1]
    })
    Pokemon.findAll({
      where: {
        base_total: {
          [Op.gte]: base_total - 100
        },
        [Op.or]: [
          {
            type1: goodMatchups,
            [Op.and]: [{ type2: { [Op.not]: badMatchups } }]
          },
          {
            type2: goodMatchups,
            [Op.and]: [{ type1: { [Op.not]: badMatchups } }]
          }
        ]
      },
      attributes: ['name', 'base_total'],
      order: [
        ['base_total', 'DESC']
      ]
    })
      .then(results => {
        res.json(results)
      })
  })
  .catch(e => res.sendStatus(400))
)

//GET matchup pokemon, no legendaries
router.get('/pokemon/matchups/nl/:name', (req, res) => Pokemon.findAll({
  where: {
    name: req.params.name
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
      if (matchups[element] >= 2) {
        goodMatchups.push(element)
      }
      if (matchups[element] < 1) {
        badMatchups.push(element)
      }
    }
    goodMatchups = goodMatchups.map(element => {
      element = element.split('_')
      if (element[1] === 'fight') {
        element[1] = 'fighting'
      }
      return element[1]
    })
    badMatchups = badMatchups.map(element => {
      element = element.split('_')
      if (element[1] === 'fight') {
        element[1] = 'fighting'
      }
      return element[1]
    })
    Pokemon.findAll({
      where: {
        base_total: {
          [Op.gte]: base_total - 100
        },
        is_legendary: {
          [Op.not]: true
        },
        [Op.or]: [
          {
            type1: goodMatchups,
            [Op.and]: [{ type2: { [Op.not]: badMatchups } }]
          },
          {
            type2: goodMatchups,
            [Op.and]: [{ type1: { [Op.not]: badMatchups } }]
          }
        ]
      },
      attributes: ['name', 'base_total'],
      order: [
        ['base_total', 'DESC']
      ]
    })
      .then(results => {
        res.json(results)
      })
  })
  .catch(e => res.sendStatus(400))
)

module.exports = router
