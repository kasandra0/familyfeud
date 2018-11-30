import AuthService from "./auth-service.js";

let _as = new AuthService()

export default class AuthController {
  constructor() {
    console.log("this is the auth-controller working")
  }
}