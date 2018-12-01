let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Subcomment'

let schema = new Schema({
  content: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  commentId: { type: ObjectId, ref: 'commid', required: true },
  userId: { type: ObjectId, ref: 'uid' }
})

let model = mongoose.model(name, schema)

module.exports = model