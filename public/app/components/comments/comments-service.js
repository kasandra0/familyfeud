let _commentApi = axios.create({
  baseURL: '/api/comments',
  withCredentials: true
})
let _subCommentApi = axios.create({
  baseURL: '/api/subcomments',
  withCredentials: true
})


let _as = {}

function handleError(err) {
  throw new Error(err)
}

export default class CommentService {
  constructor(auth) {
    _as = auth
  }
  deleteComment(id) {
    _commentApi.delete(id)
      .then(res => {

      })
  }
  upvoteComment(commentId) {
    _commentApi.put(commentId, upvotes)
  }
  downvoteComment(commentId) {
    _commentApi.put(commentId, downvotes)
  }
  getSubcomments(commentId, draw) {
    let subcoms = []
    _subCommentApi.get(commentId)
      .then(res => subcoms = res.data)
    draw(subcoms)
  }
  makeSubcomments(commentId, subComment) {
    _commentApi.post(commentId + '/subcomment', subComment)
  }
}