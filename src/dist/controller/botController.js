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
exports.BotController = void 0;
const bots_1 = require("../model/bots");
const mongoose_1 = __importDefault(require("mongoose"));
const bot = mongoose_1.default.model("bots", bots_1.botSchema);
class BotController {
    constructor() {
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, id } = req === null || req === void 0 ? void 0 : req.body;
                yield bot.create({ name, id });
                res.json({ response: "Bot created" });
            }
            catch (err) {
                res.json({ response: err });
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
                const result = yield bot.findOne({ id }, { _id: 0 }).exec();
                res.json(result);
            }
            catch (err) {
                res.json({ response: err });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
                yield bot.deleteOne({ id });
                res.json({ response: "Bot deleted", status: 204 });
            }
            catch (err) {
                res.json({ response: err });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _c;
            try {
                const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
                const { name, newId } = req === null || req === void 0 ? void 0 : req.body;
                const result = yield bot.updateOne({ id }, { id: newId, name: name });
                res.json({ response: "bot updated with success", status: 204 });
            }
            catch (err) {
                res.json(JSON.stringify(err, null, 4));
            }
        });
    }
}
exports.BotController = BotController;
