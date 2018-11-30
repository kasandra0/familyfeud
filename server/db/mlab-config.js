const mongoose = require('mongoose')
const connectionString = 'mongodb://firstplayer:player1@ds062438.mlab.com:62438/familyfeud'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})