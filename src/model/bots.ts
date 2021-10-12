import { Schema } from "mongoose";

export const botSchema = new Schema(
  {
    id: { type: Schema.Types.String, required: true },
    name: { type: Schema.Types.String, required: true },
  },
  { versionKey: false, autoCreate: false }
);
