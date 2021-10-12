import { Router } from "express";
import { MessageController } from "../controller/messageController";

const messageController = new MessageController();
const messageRouter = Router();

messageRouter.get("/messages", messageController.list);
messageRouter.get("/messages/:id", messageController.get);
messageRouter.post("/messages", messageController.add);

export default messageRouter;
