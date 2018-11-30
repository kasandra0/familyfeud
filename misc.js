
let _api = axios.create({
  baseURL: 'http://words.bighugelabs.com/api/2/b6c49817eae10a33a2d79f4760dba24f/word/json',
})
let words = []

checkAnswer(answers, answer){
  function (answer) {
    _api.get(answer)
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