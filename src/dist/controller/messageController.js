"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const message_1 = require("../model/message");
const message = mongoose_1.default.model("messages", message_1.messageSchema);
class MessageController {
    constructor() {
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { conversationId, from, to, text } = req === null || req === void 0 ? void 0 : req.body;
                yield message.create({ conversationId, from, to, text });
                res.json({ response: "message save with success" });
            }
            catch (err) {
                res.json({ response: err });
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
                const result = yield message.findOne({ _id: id });
                res.json({ response: result });
            }
            catch (err) {
                res.json({ response: err });
            }
        });
        this.list = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const conversationId = (_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.conversationId;
                const result = yield message.find({ conversationId });
                res.json({ response: result });
            }
            catch (err) {
                res.json({ response: err });
            }
        });
    }
}
exports.MessageController = MessageController;
