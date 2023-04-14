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
// -----------------------------------------------------------------------------------
// Admin
app.get("/admin", function (req, res) {
  res.send("Hello all welcome to the administrator page");
});
// ----------------------------------------------------------------------------------
// Manager
app.get("/admin/manager", async function (req, res) {
  const result = await client.db("CRM").collection("manager").find({}).toArray();
  res.send(result);
});

app.post("/admin/create/manager", async function(req,res){
    const data = req.body;
    const result = await client.db("CRM").collection("manager").insertOne(data);
    res.send(result);
});

app.put("/admin/edit/manager/:id", async function(req,res){
  const { id } = req.params;
  const data = req.body;
  const result = await client.db("CRM").collection("manager").updateOne({id: id},{$set: data});
  res.send(result);
});

app.delete("/admin/delete/manager/:id", async function(req,res){
  const { id } = req.params;
  const result = await client.db("CRM").collection("manager").deleteOne({id: id});
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

app.post("/admin/create/seniorEmp", async function(req,res){
    const data = req.body;
    const result = await client.db("CRM").collection("seniorEmployees").insertOne(data);
    res.send(result);
});

app.put("/admin/edit/seniorEmp/:id", async function (req,res){
  const{id} = req.params;
  const data = req.body;
  const result = await client.db("CRM").collection("seniorEmployees").updateOne({id: id}, {$set: data});
  res.send(result);
});

app.delete("/admin/delete/seniorEmp/:id", async function(req,res){
  const{id} = req.params;
  const result = await client.db("CRM").collection("seniorEmployees").deleteOne({id: id});
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

app.post("/admin/create/juniorEmp", async function(req,res){
    const data = req.body;
    const result = await client.db("CRM").collection("juniorEmployees").insertOne(data);
    res.send(result);
});

app.put("/admin/edit/juniorEmp/:id", async function(req,res){
  const {id} = req.params;
  const data = req.body;
  const result = await client.db("CRM").collection("juniorEmployees").updateOne({id: id}, {$set: data});
  res.send(result);
});

app.delete("/admin/delete/juniorEmp/:id", async function(req,res){
  const {id} = req.params;
  const result = await client.db("CRM").collection("juniorEmployees").deleteOne({id: id});
  res.send(result);
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));