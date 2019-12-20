const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Database connection
const { mongoURI } = require('./config/keys')
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connnected successfully')
  })
  .catch(err => console.log(err))

const app = express()

// Body-parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Cors middleware
app.use(cors())

// Use routes
const users = require('./routes/users')
app.use('/api/users', users)

module.exports = app
