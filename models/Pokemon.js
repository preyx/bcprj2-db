const { Model, STRING, INTEGER } = require('sequelize')

class Pokemon extends Model { }

Pokemon.init({
  name: {
    type: STRING,
    allowNull: false
  },
  type1: {
    type: STRING,
    allowNull: false
  },
  type2: {
    type: STRING,
    allowNull: true
  },
  hp: {
    type: INTEGER,
    allowNull: false
  },
  attack: {
    type: INTEGER,
    allowNull: false
  },
  sp_attack: {
    type: INTEGER,
    allowNull: false
  },
  defense: {
  type: INTEGER,
  allowNull: false
},
}, {sequelize: require('../config'), modelName: 'pokemon'})

module.exports = Pokemon