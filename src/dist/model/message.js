"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.messageSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.String },
    conversationId: { type: mongoose_1.Schema.Types.String, required: true },
    timestamp: { type: mongoose_1.Schema.Types.Date, default: new Date().toISOString() },
    from: { type: mongoose_1.Schema.Types.Number, required: true },
    to: { type: mongoose_1.Schema.Types.Number, required: true },
    text: { type: mongoose_1.Schema.Types.String, required: true },
}, { versionKey: false });
