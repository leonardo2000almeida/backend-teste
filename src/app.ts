// import dotenv from "dotenv";
// import path from "path";
import express from "express";
import morgan from "morgan";
import botRouter from "./routes/botRouter";
import messageRouter from "./routes/messagesRouter";
import cors from "cors";

// dotenv.config({ path: path.join(__dirname, "../.env") });

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(botRouter);
app.use(messageRouter);

export { app };
