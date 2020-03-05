const { Model, STRING } = require('sequelize')

class User extends Model { }

User.init({
  username: {
    type: STRING,
    allowNull: false,
    unique: true
  }
}, {sequelize: require('../config'), modelName: 'user', timestamps: false})

module.exports = User