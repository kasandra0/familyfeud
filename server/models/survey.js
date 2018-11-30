let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Survey'

let schema = new Schema({
  question: { type: String, required: true },
  answers: { type: [String, Number], required: true },
  userId: { type: ObjectId, ref: 'uid', required: true },
  img: { type: String, required: true }
})

let model = mongoose.model(name, schema)

module.exports = model