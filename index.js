import { MongoClient } from "mongodb";
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
const app = express();
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.get("/administrator", function (req, res) {
  res.send("Hello all welcome to the administrator page");
});

app.get("/administrator/manager", async function (req, res) {
  const result = await client.db("CRM").collection("manager").findOne({});
  res.send(result);
});

app.post("/create/manager", async function(req,res){
    const data = req.body;
    const result = await client.db("CRM").collection("manager").insertOne(data);
    res.send(result);
})

app.get("/administrator/seniorEmployees", async function (req, res) {
  const result = await client
    .db("CRM")
    .collection("seniorEmployees")
    .find({})
    .toArray();
  res.send(result);
});

app.post("/create/seniorEmployees", async function(req,res){
    const data = req.body;
    const result = await client.db("CRM").collection("seniorEmployees").insertMany(data);
    res.send(result);
})

app.get("/administrator/juniorEmployees", async function (req, res) {
  const result = await client
    .db("CRM")
    .collection("juniorEmployees")
    .find({})
    .toArray();
  res.send(result);
});

app.post("/create/juniorEmployees", async function(req,res){
    const data = req.body;
    const result = await client.db("CRM").collection("juniorEmployees").insertMany(data);
    res.send(result);
})

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
