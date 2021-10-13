"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botSchema = void 0;
const mongoose_1 = require("mongoose");
exports.botSchema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.String, required: true },
    name: { type: mongoose_1.Schema.Types.String, required: true },
}, { versionKey: false });
