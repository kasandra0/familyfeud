import AuthController from "./components/auth/auth-controller.js";
import SurveyController from "./components/survey/survey-controller.js";
import AuthService from "./components/auth/auth-service.js";

let _auth = new AuthService()

class App {
  constructor(_auth) {
    this.controllers = {
      authController: new AuthController(_auth),
      surveyController: new SurveyController(_auth)
    }
  }
}

// @ts-ignore
window.app = new App(_auth)