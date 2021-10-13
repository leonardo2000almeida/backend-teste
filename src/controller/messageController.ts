import { Request, Response } from "express";
import mongoose from "mongoose";
import { messageSchema } from "../model/message";

const message = mongoose.model("messages", messageSchema);

export class MessageController {
  constructor() {}

  add = async (req: Request, res: Response) => {
    try {
      const { conversationId, from, to, text } = req?.body;
      await message.create({ conversationId, from, to, text });
      res.json({ response: "message save with success" });
    } catch (err) {
      res.json({ response: err });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const id = req?.params?.id;
      const result = await message.findOne({ _id: id });
      res.json({ response: result });
    } catch (err) {
      res.json({ response: err });
    }
  };

  list = async (req: Request, res: Response) => {
    try {
      const conversationId = req?.query?.conversationId;
      const result = await message.find({ conversationId });
      res.json({ response: result });
    } catch (err) {
      res.json({ response: err });
    }
  };
}
