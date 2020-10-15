import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import {PostBusiness} from '../business/PostBusiness'
import { ImageReadingDTO } from "../model/ImageReding";

export class ImageReadingController {
    get(arg0: string, imagesreadingnow: (arg0: string, imagesreadingnow: any) => void) {
        throw new Error("Method not implemented.");
    }

    async imagesreadingnow(req: Request, res: Response) {

        try {

          const token = req.headers.authorization!;

          const authenticator = new Authenticator();
          const verifiedToken = authenticator.getData(token);

          const input: ImageReadingDTO = {
              userId: verifiedToken.id
          }

          const postBusiness = new PostBusiness();
          const reading = await postBusiness.imagesreadingnow(input);
          
          
          


        } catch (error) {
            res.status(400).send({ error: error.message });
            
        }

        await BaseDatabase.destroyConnection();
    }

}