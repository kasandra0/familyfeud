let _surveyApi = axios.create({
  baseURL: '/api/surveys',
  withCredentials: true
})
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
}