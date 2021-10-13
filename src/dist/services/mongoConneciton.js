"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = `mongodb+srv://develop:${process.env.MONGO_PASSWORD}@${process.env.CLUSTER}.zca5q.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
mongoose_1.default.connect(url);
mongoose_1.default.connection
    .once("open", () => console.log("Connection open"))
    .on("error", (error) => console.log(error));
