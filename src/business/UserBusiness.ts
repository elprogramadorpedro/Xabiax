import { UserInputDTO, LoginInputDTO, ImagesInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { ImagesDatabase } from "../data/ImagesDatabase";

export class UserBusiness {
  createImages(input: ImagesInputDTO) {
        throw new Error("Method not implemented.");
    }

    async imagesnew(user: ImagesInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();



        const imagesDatabase = new ImagesDatabase();
        await imagesDatabase.createImages( id, user.subtitle,
            user.author,
            user.nickname,
           
            user.file,
            user.collection);

        
        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id });

        return accessToken;
    } 
    
    async createUser(user: UserInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(user.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, user.email, user.name, user.nickname, hashPassword);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id });

        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);
        console.log(userFromDB)

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId()});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}