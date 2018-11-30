let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Survey'

let answerSchema = new Schema({
  answer: { type: String, required: true },
  count: { type: Number, default: 0 }
})

let schema = new Schema({
  question: { type: String, required: true },
  answers: [answerSchema],
  userId: { type: ObjectId, ref: 'uid', required: true },
  img: { type: String },
  comments: [{}]
})

schema.static.addAnswers = function (answers) {

}


let model = mongoose.model(name, schema)

module.exports = model