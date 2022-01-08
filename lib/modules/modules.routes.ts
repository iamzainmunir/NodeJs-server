// Here we import all routes of our peoject

import { UserRoutes } from './User/user.routes'

export default class Routes {
  public initializeRoutes = (app: any) => {
    /*
     * All the modules routes should be initialize here
     */

    const userRoutes = new UserRoutes();

    userRoutes.initialize(app, this.BASEURL)
  };

  // Set base url of our server
  private BASEURL: string = '/api/v1';
}
