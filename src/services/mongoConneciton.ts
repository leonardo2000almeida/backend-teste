import mongoose from "mongoose";
const url = `mongodb+srv://develop:${process.env.MONGO_PASSWORD}@testebradesco.zca5q.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(url);

mongoose.connection
  .once("open", () => console.log("Connection open"))
  .on("error", (error) => console.log(error));
