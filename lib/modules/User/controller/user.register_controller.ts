import { Request, Response } from 'express'

export default class UserRegisterController {
    public register = async (req: Request, res: Response) => {
        try {

            // Code to register user


            return res.status(200).send({
                success: true,
                message: 'User registered successfully !'
            })
        } catch (error) {
            return res.status(500).send({
                message: "Something went wrong",
                error: error
            })
        }
    };
}
