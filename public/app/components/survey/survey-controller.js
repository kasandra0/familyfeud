import SurveyService from "./survey-service.js";
let _currentSurvey = {}
let _ss = new SurveyService()
export default class SurveyController {
  constructor() {

  }
  getAllSurveys() {
    _ss.getAllSurveys(drawAllSurveys)
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