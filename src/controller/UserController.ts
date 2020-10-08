import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO, ImagesInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class UserController {
    async signup(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                nickname: req.body.name,
                password: req.body.password,
              
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async imagesnew(req: Request, res: Response) {
        try {

            const input:ImagesInputDTO = {
                id: req.body.id,
                subtitle: req.body.subtitle,
                author: req.body.author,
                nickname: req.body.nickname,
                Date,
                file:req.body.file,
                collection: req.body.collection,
                
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createImages(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}