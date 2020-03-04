const { Model, INTEGER } = require('sequelize')

class Team extends Model {}

Team.init({
  pokemon1: {
    type: INTEGER,
    allowNull: false,
    references:{
      model:'pokemons',
      key: 'id'
    }
  },
  pokemon2: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'pokemons',
      key: 'id'
    }
  },
  pokemon3: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'pokemons',
      key: 'id'
    }
  },
  enemy1: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'pokemons',
      key: 'id'
    }
  },
  enemy2: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'pokemons',
      key: 'id'
    }
  },
  enemy3: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'pokemons',
      key: 'id'
    }
  }
}, { sequelize: require('../config'), modelName: 'team', timestamps: false })

module.exports = Team