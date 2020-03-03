const { Model, STRING } = require('sequelize')

class Team extends Model {}

Team.init({
  pokemon1: {
    type: STRING,
    allowNull: false
  },
  pokemon2: {
    type: STRING,
    allowNull: false
  },
  pokemon3: {
    type: STRING,
    allowNull: false
  },
  enemy1: {
    type: STRING,
    allowNull: false
  },
  enemy2: {
    type: STRING,
    allowNull: false
  },
  enemy3: {
    type: STRING,
    allowNull: false
  }
}, { sequelize: require('../config'), modelName: 'team', timestamps: false })

module.exports = Team