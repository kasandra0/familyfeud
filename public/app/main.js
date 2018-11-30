import AuthController from "./components/auth/auth-controller.js";



class App {
  constructor() {
    this.controllers = {
      authController: new AuthController()
    }
  }
}

// @ts-ignore
window.app = new App()