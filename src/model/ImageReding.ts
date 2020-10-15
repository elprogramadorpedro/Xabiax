import moment, { Moment } from "moment"

export class ImageReading {

    constructor(
        private id: string,
        private subtitle: string,
        private creation_date: Moment,
        private file: string,
        private collection: string,
        private user_id: string

    ) {/*
       switch(this.type)
       case "Event":
           this.type= PostType.EVENT
           default:
   
               this.type = PostType.NORMAL
               this.creation_date = moment(this.creation_date);
           */ }

    getId() { return this.id }
    setId(id: string) { this.id = id }

    getSubtitle() { return this.subtitle }
    setSubtitle(subtitle: string) { this.subtitle = subtitle }

    getCreation_date() { return this.creation_date }
    setCreation_date(creation_date: Moment) { this.creation_date = creation_date }

    getFile() { return this.file }
    setFile(file: string) { this.file = file }

    getCollection() { return this.collection }
    setCollection(collection: string) { this.collection = collection }

    getUser_id() { return this.user_id }
    setUser_id(user_id: string) { this.user_id = user_id }

    static toImageReding(object: any) {
        return new ImageReading(object.id, object.subtitle, object.creation_date, object.file, object.collection, object.user_id
        )
    }

}


export interface ImageReadingDTO {
    userId: string
}



