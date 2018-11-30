export default class Survey {
  constructor(data) {
    this.question = data.question
    this.answers = data.answers
    this.userId = data.userId
    this.imgurl = '//placehold.it/200X200'
  }
  getCard() { // finish onclick method
    let template = `
    <div class="col-4">
      <div class="card" onclick="${}">
        <img class="card-img-top" src="//placehold.it/200X200">
        <h5 class="card-title">${this.question}</h5>
      </div>
    </div>
    `
    return template
  }
}