const router = require('express').Router

//routes for api calls
router.use('/api', require('./pokeInfoRoutes.js'))
router.use('/api', require('./teamRoutes.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router
