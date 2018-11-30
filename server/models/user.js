let mongoose = require('mongoose')
let bcrypt = require('bcryptjs')
let Schema = mongoose.Schema
const SALT = 15
let name = "User"


let schema = new Schema({
  username: { type: String, required: true, unique: true },
  hash: { type: String, required: true }
})

schema.statics.hashPassword = function (password) {
  return bcrypt.hashSync(password, SALT)
}

schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.hash)
}

let model = mongoose.model(name, schema)

module.exports = model