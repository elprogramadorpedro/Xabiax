import { Request, Response } from "express";
import {ImagesInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { ImagesDatabase } from "../data/ImagesDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { verify } from "jsonwebtoken";
import moment from "moment"
export class ImagesController {
  

      

    async createImages(req: Request, res: Response) {

        try {

          const token = req.headers.authorization!;

          const authenticator = new Authenticator();
          const verifiedToken = authenticator.getData(token);
          
          const idGenerator = new IdGenerator ();
          const id = idGenerator.generate();

          const imagesDatabase = new ImagesDatabase();
          await imagesDatabase.createImages(  id, 
            req.body.subtitle,
            verifiedToken.id,
            moment().format("YYYY-MM-DD"),
            req.body.file,
            req.body.collection)
            res.status(200).send("Image criada com sucesso");


        } catch (error) {
            res.status(400).send({ error: error.message });
            
        }

        await BaseDatabase.destroyConnection();
    }

}