let router = require('express').Router()
let Comments = require('../models/comment')
let Subcomment = require('../models/subcom')

//delete a comment, uses the comment id as the url id parameter
router.delete('/:id', (req, res, next) => {
  Comments.findByIdAndDelete(req.params.id)
    .then(Comments => res.send(Comments))
    .catch(next)
})

//upvote a comment
router.put('/:id/up', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, { upvotes: req.body.upvotes })
    .then(Comments => res.send(Comments))
    .catch(next)
})

//downvote a comment
router.put('/:id/down', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, { downvotes: req.body.downvotes })
    .then(Comments => res.send(Comments))
    .catch(next)
})

//create a subcomment, uses the comment id as the url id parameter
router.post('/:id/subcomment', (req, res, next) => {
  Subcomment.create({ comId: req.params.id }, req.body)
    .then(Subcomment => res.send(Subcomment))
    .catch(next)
})

module.exports = router