let router = require('express').Router()
let Subcomment = require('../models/subcom')

//delete a subcomment, uses the subcomment id as the url id parameter (different from above)
router.delete('/:id', (req, res, next) => {
  Subcomment.findByIdAndDelete(req.params.id)
    .then(Subcomment => res.send(Subcomment))
    .catch(next)
})

//create a subcomment, uses the comment id as the url id parameter (different from above)
router.post('/:id/subcomment', (req, res, next) => {
  Subcomment.create(req.params.id, req.body)
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
