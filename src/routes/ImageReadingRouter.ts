import express from "express";
import { ImageReadingController } from "../controller/ImageReadingController";
import { ImageReadingDatabase } from "../data/ImageReadingDatabase";


export const ImageReadingRouter= express.Router();

const imageReadingController = new ImageReadingController();

imageReadingController.get("/reading", ImageReadingDatabase.imagesreadingnow);
