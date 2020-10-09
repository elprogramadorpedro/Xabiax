import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class ImagesDatabase extends BaseDatabase {

  private static TABLE_NAME: string = "IMAGES_XABIA";

  public async createImages(
    id: string,
    subtitle: string,
    author: string,
    date:string,
    file: string,
    collection: string,
    
 
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
            id,
            subtitle,
            user_id:author,
            creation_date:date,
            file,
            collection,
            
        })
        .into(ImagesDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}