require('dotenv').config()
const express = require('express')
const {join} = require('path')
const {sync} = require('./config')

const app = express()
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// //bring in routes after we create
app.use(require('./routes'))

sync()
.then(() => app.listen(process.env.PORT || 3000) )
.catch(error => console.error(error))

