const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./teamRoutes.js'))
router.use('/api', require('./pokeInfoRoutes.js'))

//add routes for front end views


module.exports = router