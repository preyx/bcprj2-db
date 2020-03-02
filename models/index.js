const User = require('./User.js')
const Team = require('./Team.js')

User.hasMany(Team)
Team.belongsTo(User)

module.exports = { User, Team }