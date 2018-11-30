let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Comment'

let schema = new Schema({
  content: { type: String, required: true },
  upvotes: { type: Number, required: true },
  downvotes: { type: Number, required: true },
  surveyId: { type: ObjectId, ref: 'surveyid', required: true },
  userId: { type: ObjectId, ref: 'uid', required: true }
})

let model = mongoose.model(name, schema)

module.exports = model