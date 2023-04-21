import { MongoClient, ObjectId } from "mongodb";
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import adminRouter from "./router/admin.router.js";

const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(cors());

app.use(express.json());

app.use("/admin", adminRouter)

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
// -----------------------------------------------------------------------------------


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
// const generateHashedPassword = async(password) => {
//   const noOfRounds = 10;
//   const salt = await bcrypt.genSalt(noOfRounds);
//   const hashedPassword = await bcrypt.hash(password,salt);
//   console.log(salt);
//   console.log(hashedPassword);
// }
// generateHashedPassword("Password123");