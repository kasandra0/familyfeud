// @ts-ignore
let _api = axios.create({
  baseURL: '/account',
  withCredentials: true,
  timeout: 3000
})
let _user = {}
function handleError(err) {
  throw new Error(err)
}
export default class AuthService {
  constructor() {
  }
  get user() {
    return _user
  }
  register(creds, draw) {
    _api.post('register', creds)
      .then(res => {
        _user = res.data
        draw()
      })
      .catch(handleError)
  }
  authenticate(drawOnSuccess, drawOnFail) {
    _api.get('authenticate')
      .then(res => {
        _user = res.data
        drawOnSuccess()
      })
      .catch(err => {
        console.log('User not authenticated')
        drawOnFail()
      })
  }
  login(creds, draw) {
    _api.post('login', creds)
      .then(res => {
        _user = res.data
        draw()
      })
      .catch(err => {
        console.log('Cannot log in')
      })
  }
  logout(draw) {
    _api.delete('logout')
      .then(res => {
        _user = {}
        draw()
      })
      .catch(err => {
        console.log('Could not logout')
      })
  }
}