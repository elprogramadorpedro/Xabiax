import dotenv from "dotenv";
import cors from "cors";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import {ImagesRouter} from "./routes/ImagesRouter";
import { ImageReadingRouter } from "./routes/ImageReadingRouter";

dotenv.config();
const app = express();
app.use(cors())

app.use(express.json());

app.use("/user", userRouter);
app.use("/image", ImagesRouter);


const server = app.listen(process.env.PORT, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });