import express from "express";
import { ImagesController } from "../controller/ImagesController";


export const ImagesRouter = express.Router();

const imagesController = new ImagesController();

ImagesRouter.post("/createImages", imagesController.createImages);
