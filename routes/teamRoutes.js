const router = require('express').Router()
const Model = require('***ModelPath')

// GET all items
router.get('/team', (req, res) => {
  Model.findAll()
    .then(result => res.json(result))
    .catch(e => console.error(e))
})

// POST an item
router.post('/team', (req, res) => {
  Model.create(req.body)
    .then(_ => console.log('Created!'))
    .catch(e => console.error(e))
})

// PUT an item
router.put('/team', (req, res) => {
  Model.update({ req.body.*** }, { where: { *** SearchCondition *** } })
    .then(() => console.log('Updated!'))
    .catch(e => console.error(e))
})

// DELETE an item
router.delete('/team/:id', (req, res) => {
  Model.destroy({ where: { id: parseInt(req.params.id) } })
    .then(() => console.log('Deleted!'))
    .catch(e => console.error(e))
})

module.exports = router