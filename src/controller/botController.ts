import { Request, Response } from "express";
import { botSchema } from "../model/bots";
import mongoose from "mongoose";

const bot = mongoose.model("bots", botSchema);

export class BotController {
  constructor() {}

  add = async (req: Request, res: Response) => {
    try {
      const botName = req?.body?.name;
      const botId = req?.body?.id;

      await bot.create({ name: botName, id: botId });

      res.json({ response: "Bot created", status: 201 });
    } catch (err) {
      res.json({ response: err });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const botId = req?.params?.id;
      const result = await bot.findOne({ id: botId }, { _id: 0 }).exec();

      res.json(result);
    } catch (err) {
      res.json({ response: err });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const botId = req?.params?.id;
      await bot.deleteOne({ id: botId });

      res.json({ response: "Bot deleted", status: 204 });
    } catch (err) {
      res.json({ response: err });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const botId = req?.params?.id;
      const name = req?.body?.name;
      const newId = req?.body?.newId;
      const result = await bot.updateOne(
        { id: botId },
        { id: newId, name: name }
      );

      res.json({ response: "bot updated with success", status: 204 });
    } catch (err) {
      res.json(JSON.stringify(err, null, 4));
    }
  };
}
