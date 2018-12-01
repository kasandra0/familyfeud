import SurveyService from "./survey-service.js";
let _currentSurvey = {}
let _ss = new SurveyService()
let _as = {}
export default class SurveyController {
  constructor(auth) {
    _as = auth
    this.getAllSurveys()
  }
  get currentSurvey() {
    return _currentSurvey
  }
  getAllSurveys() {
    _ss.getAllSurveys(drawAllSurveys)
  }
  //create a survey
  createSurvey(event) {
    event.preventDefault();
    console.log(_as.user)
    let form = event.target
    let formData = {
      question: form.question.value,
      answers: [
        { answer: form.a1.value },
        { answer: form.a2.value },
        { answer: form.a3.value },
        { answer: form.a4.value },
        { answer: form.a5.value }
      ],
      img: form.imgurl.value,
      userId: _as.user._id

    }
    // --------
    // console.log('Question L:', form.question.length)
    // console.log(formData.answers.forEach(answer => console.log('A Length: ', answer.length)))
    // -----------
    _ss.createSurvey(formData, this.getAllSurveys)
  }
  drawSurveyForm() {
    let template = `
        <div class="col-md-12">
        <h1>Create A Survey</h1>
      </div>
      <div class="col-md-6">
        <form onsubmit="app.controllers.surveyController.createSurvey(event)">
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
  openSurvey(surveyId) {
    if (_as.user._id) {
      _ss.getOneSurvey(surveyId, drawSurvey)
    } else {
      document.getElementById('main-frame').innerHTML = `<h1>Please Login to Continue</h1>`
    }
  }
  checkAnswer(event) {
    event.preventDefault()
    let form = event.target.answer.value
    let result = _ss.checkAnswer(form, _currentSurvey.answers)
    this.drawPieChart()

  }
  drawPieChart() {
    let chart = new CanvasJS.Chart("main-frame", {
      animationEnabled: true,
      title: {
        text: `${_currentSurvey.question}`
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label}",
        dataPoints: [
          { y: 20, label: `${_currentSurvey.answers[0].answer}` },
          { y: 20, label: `${_currentSurvey.answers[1].answer}` },
          { y: 20, label: `${_currentSurvey.answers[2].answer}` },
          { y: 20, label: `${_currentSurvey.answers[3].answer}` },
          { y: 20, label: `${_currentSurvey.answers[4].answer}` }
        ]
      }]
    });
    chart.render();

  }
}
function drawAllSurveys(surveys) {
  let template = `<h2 class="col-12">Choose a survey! </h2>`
  console.log(surveys)
  surveys.forEach(survey => {
    template += survey.getCard()
  })
  template += `<div class="col-12">
  <button onclick="app.controllers.surveyController.drawSurveyForm()">Create a new survey</button>
  </div>
  `
  document.getElementById('main-frame').innerHTML = template



}
function drawSurvey(survey) {
  _currentSurvey = survey
  let template = `
  <h3>${survey.question}</h3>
  <img src="${survey.img}">
  <form onsubmit="app.controllers.surveyController.checkAnswer(event)">
    <div class="form-group">
      <label for="answer">Enter an answer</label>
      <input type="text" class="form-control" name="answer">
      <input type="submit">
    </div>
  </form>
  `
  let temp2 = '<ul>'
  survey.comments.forEach(comment => {
    temp2 += `<li>${comment.content}</li>`
  })
  document.getElementById('main-frame').innerHTML = template
  document.getElementById('comments-frame').innerHTML = temp2 + '</ul>'

}

