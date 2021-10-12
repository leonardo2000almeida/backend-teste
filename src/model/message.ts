import { Schema } from "mongoose";

const subSchema = new Schema({}, { _id: false });

export const messageSchema = new Schema(
  {
    conversationId: { type: Schema.Types.ObjectId, required: true },
    timestamp: { type: Schema.Types.Date, default: new Date().toISOString() },
    from: { type: Schema.Types.ObjectId, required: true },
    to: { type: Schema.Types.ObjectId, required: true },
    text: { type: Schema.Types.String, required: true },
  },
  { versionKey: false, _id: false }
);
