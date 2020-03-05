const router = require('express').Router()
const {Pokemon} = require('../models')
//bring in Op to do an OR statement 
const {Op} = require('sequelize')
//get all pokemon
router.get('/pokemons', (req, res) => {
  Pokemon.findAll()
  .then(pokemon => {
    res.json(pokemon)
  })
  .catch(error => console.error(error))
})

//get pokemon by id
router.get('/pokemons/:id', (req, res) => {
  Pokemon.findAll( {where: {id: req.params.id}})
  .then(pokemon => {
    res.json(pokemon)
  })
  .catch(error => console.error(error))
})

//get pokemon matchup
router.get('/pokemons/matchups/:id', (req, res) => {
  //getting inital pokemon to generate matchups against
  Pokemon.findAll( {where: {id: req.params.id}, attributes:['base_total', 'against_bug', 'against_dark', 'against_dragon', 'against_electric', 'against_fairy', 'against_fight', 'against_fire', 'against_flying', 'against_ghost', 'against_grass', 'against_ground', 'against_ice', 'against_normal', 'against_poison', 'against_psychic', 'against_rock', 'against_steel', 'against_water']})
  .then(pokemon => {
    let matchups = pokemon[0].dataValues
    //getting all pokemon within the a 100 base stat range
    let base_total = matchups.base_total - 100
    //remove the key base_total
    delete matchups['base_total']
    console.log(matchups)
    let goodMatchups = []
    let badMatchups =[]
    for(let element in matchups){
      if(matchups[element] >= 2){
        goodMatchups.push(element)
        }else if (matchups[element]< 1){
          badMatchups.push(element)
        }
      }
      //mapping to take out against_
      goodMatchups = goodMatchups.map(element => {
        element = element.split('_')
        //accomodate for against_fight
        if(element[1]==='fight'){
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
      console.log(badMatchups)
      //serach for pokemon based on goodMatchups
      console.log(goodMatchups)
      Pokemon.findAll({
        where:{
          base_total: {
            [Op.gte]: base_total
          },
          [Op.or]:[
            {
              //checks if anything in the goodmatchups is in the type1 column AND nothing in the badmatchups appear in the type2 column
              type1: goodMatchups,
              [Op.and]: [{ type2: { [Op.not]: badMatchups } }]
            },
            {
              //checks if anything in the goodmatchups is in the type2 column AND nothing in the badmatchups appear in the type1 column
              type2: goodMatchups,
              [Op.and]: [{ type1: { [Op.not]: badMatchups } }]
            }
          ]
        }, attributes: ['name', 'base_total'], order:[ ['base_total', 'DESC'] ]
      })
      .then(results => {
        console.log(`base_total: ${base_total}`)
        res.json(results)
      })
      .catch(error => console.error(error))
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