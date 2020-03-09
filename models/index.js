const User = require('./User.js')
const Team = require('./Team.js')
const Pokemon = require('./Pokemon.js')

User.hasMany(Team)
Team.belongsTo(User)
Team.belongsTo(Pokemon, { as: 'pokemon1' })
Team.belongsTo(Pokemon, { as: 'pokemon2' })
Team.belongsTo(Pokemon, { as: 'pokemon3' })
Team.belongsTo(Pokemon, { as: 'enemy1' })
Team.belongsTo(Pokemon, { as: 'enemy2' })
Team.belongsTo(Pokemon, { as: 'enemy3' })

module.exports = { User, Team, Pokemon }
