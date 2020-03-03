const router = require('express').Router()
const Model = require('***ModelPath')

// GET all items
router.get('/poke', (req, res) => {
  Model.findAll()
    .then(result => res.json(result))
    .catch(e => console.error(e))
})

// POST an item
router.post('/poke', (req, res) => {
  Model.create(req.body)
    .then(_ => console.log('Created!'))
    .catch(e => console.error(e))
})

// PUT an item
router.put('/poke', (req, res) => {
  Model.update({ req.body.*** }, { where: { *** SearchCondition *** } })
    .then(() => console.log('Updated!'))
    .catch(e => console.error(e))
})

// DELETE an item
router.delete('/poke/:id', (req, res) => {
  Model.destroy({ where: { id: parseInt(req.params.id) } })
    .then(() => console.log('Deleted!'))
    .catch(e => console.error(e))
})

module.exports = router