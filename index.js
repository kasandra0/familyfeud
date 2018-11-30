// Family Feud
let express = require('express')
let bodyParser = require('body-parser')
let server = express()
require("./server/db/mlab-config")

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

let auth = require('./server/auth/routes')
let survey = require('./server/routes/survey')
server.use(auth.session)
server.use('/account', auth.router)


server.use("*", (req, res, next) => {
  if (!req.session.uid) {
    return next(new Error("Please login to continue"))
  }
  else {
    req.body.creatorId = req.session.uid
    next()
  }
})

// @ts-ignore
server.use('/api/survey', survey)

server.use("*", (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})
server.listen(3000, () => {
  console.log("The server is running on port:", 3000)
})