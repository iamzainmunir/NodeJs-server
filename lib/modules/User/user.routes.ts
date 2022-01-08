import UserLoginController from './controller/user.login_controller'
import UserRegisterController from "./controller/user.register_controller"

export class UserRoutes {
  public initialize (app: any, baseUrl: string): void {
    const uerLoginController = new UserLoginController(),
    userRegisterController = new UserRegisterController();

    app
      .route(baseUrl + '/user/login')
      .get(uerLoginController.login)

    app
      .route(baseUrl + '/user/register')
      .post(userRegisterController.register)
  }
}
