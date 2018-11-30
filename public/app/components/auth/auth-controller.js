import AuthService from "./auth-service.js";

let _as = {}
let _user = {}

export default class AuthController {
  constructor(auth) {
    _as = auth
    _as.authenticate(drawLogoutForm, drawLoginForm)
  }
  login(event) {
    event.preventDefault()
    let creds = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    _as.login(creds, drawLogoutForm)
  }
  logout() {
    _as.logout(drawLoginForm)
  }
  register(event) {
    event.preventDefault()
    let creds = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    _as.register(creds, drawLogoutForm)
  }
  drawRegisterForm() {
    let template = `
  <div class="col-md-4 offset-8">
      <p>Enter New User Info</p>
        <form onsubmit="app.controllers.authController.register(event)">
          <span>
            <label for="username">Username: </label> <input type="text" name="username">
            <label for="password">Password: </label> <input type="password" name="password">
          </span>
          <input type="submit" value="Create a new user">
        </form>
      </div>
    `
    document.getElementById("auth-frame").innerHTML = template
  }
}
// PRIVATE
function drawLoginForm() {
  let template = `
  <div class="col-md-4 offset-8">
        <form onsubmit="app.controllers.authController.login(event)">
          <span>
            <label for="username">Username: </label> <input type="text" name="username">
            <label for="password">Password: </label> <input type="password" name="password">
          </span>
          <input type="submit" value="login">
          </form>
          <button onclick="app.controllers.authController.drawRegisterForm()">Register New User</button>
      </div>
    `
  document.getElementById("auth-frame").innerHTML = template
}
function drawLogoutForm() {
  _user = _as.user
  let template = `
      <p>Current User: ${_user.username} </p>
      <div class="col-md-4 offset-8">
        <button onclick="app.controllers.authController.logout()">Logout</button>
      </div>
    `
  document.getElementById("auth-frame").innerHTML = template
}