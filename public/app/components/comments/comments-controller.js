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
  drawSubcomments(subcomments) {
    let template = `<ul>`
    subcomments.forEach(com => {
      template += `<li>
      ${com.content}
      </li>`
    });
    template += `</ul>`
    document.getElementById.innerHTML = template
  }
  makeSubcomment(id, event) {
    event.preventdefault()
    if (_as.user.uid) {
      let content = event.target.content.value
      _cs.makeSubcomments(id, content)
    }
    else {
      console.error(handleError)
    }
  }
}
