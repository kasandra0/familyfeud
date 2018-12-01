export default class Survey {
  constructor(data) {
    this.question = data.question
    this.answers = data.answers
    this.userId = data.userId
    this.img = data.img
    this.id = data._id
  }
  getCard() { // finish onclick method
    let template = `
    <div class="col-4">
      <div class="card" onclick="app.controllers.surveyController.openSurvey('${this.id}')">
        <img class="card-img-top" src="${this.img}">
        <h5 class="card-title">${this.question}</h5>
      </div>
    </div>
    `
    return template
  }
}