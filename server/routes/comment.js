let router = require('express').Router()
let Comments = require('../models/comment')

//delete a comment, uses the comment id as the url id parameter (different from above)
router.delete('/:id', (req, res, next) => {
  Comments.findByIdAndDelete(req.params.id)
    .then(Comments => res.send(Comments))
    .catch(next)
})

//create a comment, uses the survey id as the url id parameter (different from above)
router.post('/:id/comment', (req, res, next) => {
  Comments.create(req.params.id, req.body)
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

module.exports = router