let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Comment'

let schema = new Schema({
  content: { type: String },
  upvotes: { type: Number, required: true, default: 0 },
  downvotes: { type: Number, required: true, default: 0 },
  surveyId: { type: ObjectId, ref: 'surveyid' },
  userId: { type: ObjectId, ref: 'uid' }
})

let model = mongoose.model(name, schema)

module.exports = model