let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = 'Survey'

let answerSchema = new Schema({
  answer: { type: String, required: true, maxlength: 10 },
  count: { type: Number, default: 0 }
})

let schema = new Schema({
  question: { type: String, required: true, maxlength: 50 },
  answers: [answerSchema],
  userId: { type: ObjectId, ref: 'uid', required: true },
  img: { type: String },
  comments: [{}]
})

schema.method.addAnswers = function (answers) {
  answers.forEach(answer => {
    this.answers.push(answer)
  });
}


let model = mongoose.model(name, schema)

module.exports = model