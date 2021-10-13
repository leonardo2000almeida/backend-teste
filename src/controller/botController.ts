import { Request, Response } from "express";
import { botSchema } from "../model/bots";
import mongoose from "mongoose";

const bot = mongoose.model("bots", botSchema);

export class BotController {
  constructor() {}

  add = async (req: Request, res: Response) => {
    try {
      const { name, id } = req?.body;
      await bot.create({ name, id });
      res.json({ response: "Bot created" });
    } catch (err) {
      res.json({ response: err });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const id = req?.params?.id;
      const result = await bot.findOne({ id }, { _id: 0 }).exec();
      res.json(result);
    } catch (err) {
      res.json({ response: err });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = req?.params?.id;
      await bot.deleteOne({ id });
      res.json({ response: "Bot deleted", status: 204 });
    } catch (err) {
      res.json({ response: err });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = req?.params?.id;
      const { name, newId } = req?.body;
      const result = await bot.updateOne({ id }, { id: newId, name: name });

      res.json({ response: "bot updated with success", status: 204 });
    } catch (err) {
      res.json(JSON.stringify(err, null, 4));
    }
  };
}
