import CommentService from "./comments-service.js";

let _cs = new CommentService
let _as = {}
let _currentComment = {}

function handleError(error) {
  throw new Error(error)
}

export default class CommentController {
  constructor(auth) {
    _as = auth
  }
  getSubcomments(commentId) {
    _cs.getSubcomments(commentId, this.drawSubcomments)
  }
  drawSubcomments(subcomments, commentId) {
    let template = `<ul>`
    console.log(subcomments)
    subcomments.forEach(com => {
      template += `<li>
      ${com.content}
      </li>`
    });
    template += `</ul>`
    document.getElementById('reply-' + commentId).innerHTML = template
  }
  makeSubcomment(id, event) {
    debugger
    event.preventDefault()
    if (_as.user._id) {
      let content = event.target.content.value
      let subComment = {
        content: content,
        userId: _as.user._id
      }
      _cs.makeSubcomments(id, subComment)
    }
    else {
      console.error(handleError)
    }
  }
  drawForm(commentId) {
    let form = `
      <form onsubmit="app.controllers.commentsController.makeSubcomment('${commentId}', event)">
        <div class="form-group">
          <input type="text" name="content">
          <input type="submit" value="Post Comment">
        </div>
      </form>
    `

    document.getElementById('reply-' + commentId).innerHTML = form
  }
}
