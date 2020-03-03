const { Model, STRING, INTEGER } = require('sequelize')

class Pokemon extends Model { }

Pokemon.init({
  name: {
    type: STRING,
    allowNull: false
  },
  attack: {
    type: INTEGER,
    allowNull: false
  }
}, {sequelize: require('../config'), modelName: 'pokemon'})

module.exports = Pokemon