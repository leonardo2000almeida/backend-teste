import {Router} from "express";
import { BotController } from "../controller/botController";

const botRouter = Router();
const botController = new BotController();

botRouter.get("/bots/:id", botController.get);
botRouter.post("/bots", botController.add);
botRouter.delete("/bots/:id", botController.delete);
botRouter.put("/bots/:id",botController.update);

export default botRouter;