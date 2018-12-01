import Survey from "../../models/survey.js";

// @ts-ignore
let _surveyApi = axios.create({
  baseURL: '/api/survey',
  withCredentials: true
})
let _surveys = []
let _wordApi = axios.create({
  baseURL: 'http://words.bighugelabs.com/api/2/b6c49817eae10a33a2d79f4760dba24f/',
})
let words = []


function handleError(error) {
  throw new Error(error)
}
export default class SurveyService {
  constructor() {
  }
  getAllSurveys(drawAll) {
    _surveyApi.get('')
      .then(res => {
        res.data.forEach(surveyData => {
          let survey = new Survey(surveyData)
          _surveys.push(survey)
        })
        drawAll(_surveys)
      })
      .catch(handleError)
  }
  //Get One Survey
  getOneSurvey(surveyId, draw) {
    _surveyApi.get(surveyId)
      .then(res => {
        console.log('got survey from server', res)
        draw(res.data)
      })
      .catch(handleError)
  }
  //create survey
  createSurvey(formData, callback) {
    debugger
    console.log(formData)
    _surveyApi.post('', formData)
      .then(callback)
      .catch(handleError)
  }
  checkAnswer(answer, answers) {
    // _wordApi.get(answer + '/json')
    //   .then(res => {
    //     console.log(res.data)
    //     words = res.data.noun
    //     words.forEach(word => {
    //       answers.forEach(answer => {
    //         if (word.toLowerCase() == answer.toLowerCase()) {
    //           return true
    //         }

    //       })
    //     })
    //     return false
    //   })
    //   .catch(handleError)
    console.log(answer, answers)
    let result = answers.find(a => {
      return a.answer.toLowerCase() == answer.toLowerCase()
    })
    if (result) {
      return true
    } else {
      return false
    }
  }
  makeComment(surveyId, comment, callback) {
    debugger
    _surveyApi.post(surveyId + '/comment', comment)
      .then(callback)
      .catch(handleError)
  }
}