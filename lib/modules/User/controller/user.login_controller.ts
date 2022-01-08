// Here we handle our api calls.

import { Request, Response } from 'express'


export default class UserLoginController {
    public login = async (req: Request, res: Response) => {
        try {

            // Code to login user

            return res.status(200).send({
                success: true,
                message: 'User logged in successfully !'
            })
        } catch (error) {
            return res.status(500).send({
                message: "Something went wrong",
                error: error
            })
        }
    };
}
