import { MongoClient } from "mongodb";
// const express = require("express"); // "type": "commonjs"
import express from "express"; // "type": "module"
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import cors from 'cors';

const PORT = 4000;

const MONGO_URL = "mongodb://127.0.0.1";
// const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(cors());

app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
// -----------------------------------------------------------------------------------
// Admin
app.get("/admin", function (req, res) {
  res.send("Hello all welcome to the administrator page");
});
// ----------------------------------------------------------------------------------
// Manager
app.get("/admin/manager", async function (req, res) {
  const result = await client
    .db("CRM")
    .collection("manager")
    .find({})
    .toArray();
  res.send(result);
});

app.get("/admin/manager/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("CRM")
    .collection("manager")
    .findOne({ _id: id });
  res.send(result);
});

app.post("/admin/create/manager", async function (req, res) {
  const data = req.body;
  const result = await client.db("CRM").collection("manager").insertOne(data);
  res.send(result);
});

app.put("/admin/edit/manager/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await client
    .db("CRM")
    .collection("manager")
    .updateOne({ _id: id }, { $set: data });
  res.send(result);
});

app.delete("/admin/delete/manager/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("CRM")
    .collection("manager")
    .deleteOne({ _id: id });
  res.send(result);
});
// ----------------------------------------------------------------------------------
// Senior Employees
app.get("/admin/seniorEmp", async function (req, res) {
  const result = await client
    .db("CRM")
    .collection("seniorEmployees")
    .find({})
    .toArray();
  res.send(result);
});

app.get("/admin/seniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("CRM")
    .collection("seniorEmployees")
    .findOne({ _id: id });
  res.send(result);
});

app.post("/admin/create/seniorEmp", async function (req, res) {
  const data = req.body;
  const result = await client
    .db("CRM")
    .collection("seniorEmployees")
    .insertOne(data);
  res.send(result);
});

app.put("/admin/edit/seniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await client
    .db("CRM")
    .collection("seniorEmployees")
    .updateOne({ _id: id }, { $set: data });
  res.send(result);
});

app.delete("/admin/delete/seniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("CRM")
    .collection("seniorEmployees")
    .deleteOne({ _id: id });
  res.send(result);
});
// -------------------------------------------------------------------------------
// Junior Employees
app.get("/admin/juniorEmp", async function (req, res) {
  const result = await client
    .db("CRM")
    .collection("juniorEmployees")
    .find({})
    .toArray();
  res.send(result);
});

app.get("/admin/juniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("CRM")
    .collection("juniorEmployees")
    .findOne({ _id: id });
  res.send(result);
});

app.post("/admin/create/juniorEmp", async function (req, res) {
  const data = req.body;
  const result = await client
    .db("CRM")
    .collection("juniorEmployees")
    .insertOne(data);
  res.send(result);
});

app.put("/admin/edit/juniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await client
    .db("CRM")
    .collection("juniorEmployees")
    .updateOne({ _id: id }, { $set: data });
  res.send(result);
});

app.delete("/admin/delete/juniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("CRM")
    .collection("juniorEmployees")
    .deleteOne({ _id: id });
  res.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
