require('dotenv').config()
const express = require('express')
const {join} = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(join(__dirname, 'public')))

//bring models after we create
app.use(require('./models'))

//bring in routes after we create
app.use(require('./routes'))


app.listen(process.env.PORT || 3000)