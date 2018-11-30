import AuthController from "./components/auth/auth-controller.js";
import SurveyController from "./components/survey/survey-controller.js";



class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(),
      surveyController: new SurveyController()
    }
  }
}

// @ts-ignore
window.app = new App()