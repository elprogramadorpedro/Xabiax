import { UserInputDTO, LoginInputDTO, ImagesInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { ImagesDatabase } from "../data/ImagesDatabase";
import { ImageReading, ImageReadingDTO } from "../model/ImageReding";
//import { ImageReading } from "../routes/ImageReadingRouter";
import { ImageReadingDatabase } from "../data/ImageReadingDatabase";

export class PostBusiness {


   public async imagesreadingnow(input: ImageReadingDTO): Promise<ImageReading[]> {

        const imagesDatabase = new ImageReadingDatabase();
        return await imagesDatabase.imagesreadingnow(input.userId)
     
    } 
  
}