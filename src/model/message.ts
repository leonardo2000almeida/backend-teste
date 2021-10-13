import { Schema } from "mongoose";

export const messageSchema = new Schema(
  {
    id: {type: Schema.Types.String},
    conversationId: { type: Schema.Types.String, required: true },
    timestamp: { type: Schema.Types.Date, default: new Date().toISOString() },
    from: { type: Schema.Types.Number, required: true },
    to: { type: Schema.Types.Number, required: true },
    text: { type: Schema.Types.String, required: true },
  },
  { versionKey: false }
);
