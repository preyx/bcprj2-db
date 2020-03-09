const { Model, INTEGER } = require('sequelize')

class Team extends Model {}

Team.init({
}, { sequelize: require('../config'), modelName: 'team', timestamps: false })

module.exports = Team
