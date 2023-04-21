import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function deleteJuniorEmpById(id) {
  return await client
    .db("CRM")
    .collection("juniorEmployees")
    .deleteOne({ _id: new ObjectId(id) });
}
export async function editJuniorEmpById(id, data) {
  return await client
    .db("CRM")
    .collection("juniorEmployees")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function createJuniorEmp(data) {
  return await client.db("CRM").collection("juniorEmployees").insertOne(data);
}
export async function getJuniorEmpById(id) {
  return await client
    .db("CRM")
    .collection("juniorEmployees")
    .findOne({ _id: new ObjectId(id) });
}
export async function getJuniorEmp() {
  return await client
    .db("CRM")
    .collection("juniorEmployees")
    .find({})
    .toArray();
}
export async function deleteSeniorEmpById(id) {
  return await client
    .db("CRM")
    .collection("seniorEmployees")
    .deleteOne({ _id: new ObjectId(id) });
}
export async function editSeniorEmpById(id, data) {
  return await client
    .db("CRM")
    .collection("seniorEmployees")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function createSeniorEmp(data) {
  return await client.db("CRM").collection("seniorEmployees").insertOne(data);
}
export async function getSeniorEmpById(id) {
  return await client
    .db("CRM")
    .collection("seniorEmployees")
    .findOne({ _id: new ObjectId(id) });
}
export async function getSeniorEmp() {
  return await client
    .db("CRM")
    .collection("seniorEmployees")
    .find({})
    .toArray();
}
export async function deleteManagerById(id) {
  return await client
    .db("CRM")
    .collection("manager")
    .deleteOne({ _id: new ObjectId(id) });
}
export async function editManagerById(id, data) {
  return await client
    .db("CRM")
    .collection("manager")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function createManager(data) {
  return await client.db("CRM").collection("manager").insertOne(data);
}
export async function getManagerId(id) {
  return await client
    .db("CRM")
    .collection("manager")
    .findOne({ _id: new ObjectId(id) });
}
export async function getManager() {
  return await client.db("CRM").collection("manager").find({}).toArray();
}
