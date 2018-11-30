import SurveyService from "./survey-service.js";
let _currentSurvey = {}
let _ss = new SurveyService()
let _as = {}
export default class SurveyController {
  constructor(auth) {
    _as = auth
  }
  getAllSurveys() {
    _ss.getAllSurveys(drawAllSurveys)
  }
  //create a survey
  createSurvey(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      question: form.question.value,
      answers: [
        { answer: form.a1.value, count: form.n1.value },
        { answer: form.a2.value, count: form.n2.value },
        { answer: form.a3.value, count: form.n3.value },
        { answer: form.a4.value, count: form.n4.value },
        { answer: form.a5.value, count: form.n5.value }
      ],
      img: form.imgurl.value
    }
    _ss.createSurvey(formData, this.getAllSurveys)
  }

}
function drawAllSurveys(surveys) {
  let template = `<h2>Choose a survey! </h2>`
  surveys.forEach(survey => {
    template += survey.getCard()
  })
  template += `
  <button onclick="">Create a new survey</button>
  `
  document.getElementById('main-frame').innerHTML = template
}
function drawSurveyForm() {
  let template = `
        <div class="col-md-12">
        <h1>Create A Survey</h1>
      </div>
      <div class="col-md-6">
        <form onsubmit="">
          <div class="form-group">
            <label for="question">Survey Question: </label> <input type="text" name="question">
          </div>
          <div class="form-group">
            <label for="answers">5 most common answers:</label>
            <div class="form-group">
              <input type="text" name="a1" placeholder="answer">
              <input type="number" name="n1" placeholder="perc">
            </div>
            <div class="form-group">
              <input type="text" name="a2" placeholder="answer">
              <input type="number" name="n2" placeholder="percent">
            </div>
            <div class="form-group">
              <input type="text" name="a3" placeholder="answer">
              <input type="number" name="n3" placeholder="percent">
            </div>
            <div class="form-group">
              <input type="text" name="a4" placeholder="answer">
              <input type="number" name="n4" placeholder="percent">
            </div>
            <div class="form-group">
              <input type="text" name="a5" placeholder="answer">
              <input type="number" name="n5" placeholder="percent">
            </div>
          </div>
          <div class="form-group">
            <label for="imgurl">image link: </label>
            <input type="text" name="imgurl">
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
  `

  document.getElementById('main-frame').innerHTML = template

}