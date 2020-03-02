const router = require('express').Router()

router.use('/api', require('./userRoutes'))
router.use('/api', require('./teamRoutes.js'))
router.use('/api', require('./pokeInfoRoutes'))

module.exports = router