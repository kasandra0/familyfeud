import AuthService from "./auth-service.js";

let _as = new AuthService()

export default class AuthController {
  constructor() {
    this.draw()
  }
  draw() {
    // add on submit method
    let template = `
  <div class="col-md-4 offset-8">
        <form onsubmit="">
          <span>
            <label for="username">Username: </label> <input type="text" name="username">
            <label for="password">Password: </label> <input type="password" name="password">
          </span>
          <input type="submit">
        </form>
      </div>
    `
    document.getElementById("auth-frame").innerHTML = template
  }
}