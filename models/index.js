const User = require('./User.js')
const Team = require('./Team.js')
const Pokemon = require('./Pokemon.js')

User.hasMany(Team)
Team.belongsTo(User)

module.exports = { User, Team, Pokemon }
