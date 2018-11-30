let router = require('express').Router()
let Survey = require('../models/survey')
let Comments = require('../models/comment')


//get all surveys
router.get('/', (req, res, next) => {
  Survey.find({})
    .then(surveys => res.send(surveys))
    .catch(next)
})

//get one survey and comments
router.get('/:id', (req, res, next) => {
  Survey.findOne(req.params.id)
    .then(survey => {
      Comments.find({ surveyId: req.params.id })
        .then(comments => {
          survey.comments = comments
          res.send(survey)
        })
        .catch(next)
    })
})

//delete a survey
router.delete('/:id', (req, res, next) => {
  Survey.findByIdAndUpdate(req.params.id, 'The Survey No Longer Exists', { new: true })
    .then(survey => res.send(survey))
    .catch(next)
})

//create a survey
router.post('/', (req, res, next) => {
  Survey.create(req.body)
    .then(survey => {
      survey.addAnswers(req.body.answers)
      survey.save(err => {
        if (err) {
          return next(err)
        }
        res.send(survey)
      })
    })
    .catch(next)
})

//someone answers correctly to a survey
router.put('/:id', (req, res, next) => {
  Survey.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(survey => res.send(survey))
    .catch(next)
})

//create a comment, uses the survey id as the url id parameter
router.post('/:id/comment', (req, res, next) => {
  Comments.create({ surveyId: req.params.id }, req.body)
    .then(Comments => res.send(Comments))
    .catch(next)
})


module.exports = router