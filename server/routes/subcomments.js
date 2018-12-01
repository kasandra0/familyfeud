let router = require('express').Router()
let Subcomment = require('../models/subcom')

//delete a subcomment, uses the subcomment id as the url id parameter
router.delete('/:id', (req, res, next) => {
  Subcomment.findByIdAndDelete(req.params.id)
    .then(Subcomment => res.send(Subcomment))
    .catch(next)
})

//upvote a subcomment
router.put('/:id/up', (req, res, next) => {
  Subcomment.findByIdAndUpdate(req.params.id, { upvotes: req.body.upvotes })
    .then(Comments => res.send(Comments))
    .catch(next)
})

//downvote a subcomment
router.put('/:id/down', (req, res, next) => {
  Subcomment.findByIdAndUpdate(req.params.id, { downvotes: req.body.downvotes })
    .then(Comments => res.send(Comments))
    .catch(next)
})

//get subbcoments using the comment id
router.get('/:id', (req, res, next) => {
  Subcomment.find({ commentId: req.params.id })
    .then(subcomments => res.send(subcomments))
    .catch(next)
})

module.exports = router