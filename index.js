// Family Feud
let express = require('express')
let bodyParser = require('body-parser')
let server = express()
require("./server/db/mlab-config")

const PORT = process.env.PORT || 3000

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

let auth = require('./server/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)



server.use("*", (req, res, next) => {
  if (req.method == "GET") {
    return next()
  }
  if (!req.session.uid) {
    return next(new Error("Please login to continue"))
  }
  if (req.method == "POST") {
    req.body.creatorId = req.session.uid
  }
  next()
})

let surveyRoutes = require('./server/routes/survey')
let commentsRoutes = require('./server/routes/comment')
let subcommentsRoutes = require('./server/routes/subcomments')

server.use('/api/survey', surveyRoutes)
server.use('/api/comments', commentsRoutes)
server.use('/api/subcomments', subcommentsRoutes)

server.use("*", (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})
server.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})