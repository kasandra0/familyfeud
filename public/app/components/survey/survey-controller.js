import SurveyService from "./survey-service.js";
let _currentSurvey = {}
let _ss = new SurveyService()
export default class SurveyController {
  constructor() {
    debugger
    createSurvey()
  }
  getAllSurveys() {
    _ss.getAllSurveys(drawAllSurveys)
  }
  //create a survey

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
function createSurvey() {
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
              <input type="text" name="a1">
              <input type="number" name="n1">
            </div>
            <div class="form-group">
              <input type="text" name="a2">
              <input type="number" name="n2">
            </div>
            <div class="form-group">
              <input type="text" name="a3">
              <input type="number" name="n3">
            </div>
            <div class="form-group">
              <input type="text" name="a4">
              <input type="number" name="n4">
            </div>
            <div class="form-group">
              <input type="text" name="a5">
              <input type="number" name="n5">
            </div>
          </div>
        </form>
      </div>
  `

  document.getElementById('main-frame').innerHTML = template

}