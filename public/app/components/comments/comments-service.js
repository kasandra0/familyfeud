let _commentApi = axios.create({
  baseURL: '/api/comments',
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
  makeSubcomment(formData, success) {
    let commentId = formData.id
    if (!formData) {
      throw new Error("cOmMenT")
    }
    _commentApi.post(commentId + '/subcomment', formData)
      .then(res => {
        this.getComments(success)
      })
      .catch(handleError)
  }
  deleteComment(id) {
    _commentApi.delete(id)
      .then(res => {

      })
  }
  upvoteComment() {
    _commentApi.
  }
  downvoteComment() {
    _commentApi.
  }
  getComments(draw) {

  }
}