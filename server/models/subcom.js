let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Subcomment'

let schema = new Schema({
  content: { type: String, required: true },
  upvotes: { type: Number, required: true },
  downvotes: { type: Number, required: true },
  commentId: { type: ObjectId, ref: 'commid', required: true },
  userId: { type: ObjectId, ref: 'uid', required: true }
})

let model = mongoose.model(name, schema)

module.exports = model