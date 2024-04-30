import { Router } from "express";
import { getAllClients } from "../controllers/clientController.js";
import { tokenExtractor } from "../middlewares/tokenExtractor.js";

export const clientRouter = new Router();

clientRouter.use(tokenExtractor)

clientRouter.get('/', getAllClients)