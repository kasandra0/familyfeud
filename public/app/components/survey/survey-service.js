// @ts-ignore
let _surveyApi = axios.create({
  baseURL: '/api/surveys',
  withCredentials: true
})

let _wordApi = axios.create({
  baseURL: 'http://words.bighugelabs.com/api/2/b6c49817eae10a33a2d79f4760dba24f/word/json',
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
        drawAll(res.data) // verify data format
      })
      .catch(handleError)
  }
  //create survey
  createSurvey(formData, callback) {
    _surveyApi.post('', formData)
      .then(callback)
      .catch(handleError)
  }
  checkAnswer(answer, answers) {
    function (answer) {
      _wordApi.get(answer)
        .then(res => { words = res.data })
        .catch(console.error(err)
        )
    }
    words.forEach(word => {
      if (word == answers) {
        return true
      }
    })
    return false
  }
}