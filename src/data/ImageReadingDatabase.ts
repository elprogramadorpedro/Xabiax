import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { ImagesDatabase } from "./ImagesDatabase";
import { ImageReading } from "../model/ImageReding";

export class ImageReadingDatabase extends BaseDatabase {
    static imagesreadingnow(arg0: string, imagesreadingnow: any) {
        throw new Error("Method not implemented.");
    }
    static TABLE_NAME: any;

    public async imagesreadingnow(userId: string): Promise<ImageReading[]>{

        try {
            
            const ImageReadingArray: ImageReading[] = []; 

            const result = await this.getConnection()
            .raw (`
                SELECT p.*FROM ${ImageReadingDatabase.TABLE_NAME} p
                JOIN IMAGES_XABIA f
                ON p.user_id = f.id_responder
                WHERE f.id_requester = "${userId}"
                ORDER BY p.creation_date DESC;
            `)

            for(let imageReading of result[0]){
            ImageReadingArray.push(ImageReading.toImageReding(imageReading));
            }

              return ImageReadingArray;

        } catch (error) {
           throw new Error(error.sqlMessage || error.message);
        }

    }
  

}
