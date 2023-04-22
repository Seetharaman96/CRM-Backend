import { client } from "../index.js";

export async function signUp(data) {
  return await client.db("CRM").collection("user").insertOne(data);
}
