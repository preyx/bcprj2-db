const { Model, INTEGER } = require('sequelize')

class Team extends Model { }

Team.init({
  pokemon1: {
    type: INTEGER,
    allowNull: false
  },
  pokemon2: {
    type: INTEGER,
    allowNull: false
  },
  pokemon3: {
    type: INTEGER,
    allowNull: false
  },
  enemy1: {
    type: INTEGER,
    allowNull: false
  },
  enemy2: {
    type: INTEGER,
    allowNull: false
  },
  enemy3: {
    type: INTEGER,
    allowNull: false
  }
}, { sequelize: require('../config'), modelName: 'team' })

module.exports = Team