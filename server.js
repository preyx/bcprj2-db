require('dotenv').config()
const express = require('express')
const { join } = require('path')
const sequelize = require('./config')

const app = express()
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.render('home')
})

// //bring in routes after we create
app.use(require('./routes'))

sequelize.sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(error => console.error(error))
