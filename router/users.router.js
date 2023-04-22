import express from "express";
const router = express.Router();
import { signUp } from "../service/users.service.js";
import bcrypt from "bcrypt";

const generateHashedPassword = async (password) => {
  const noOfRounds = 10;
  const salt = await bcrypt.genSalt(noOfRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
router.post("/signUp", async function (req, res) {
  const { userName, password } = req.body;
  const pass = await generateHashedPassword(password);
  const result = await signUp({
    userName: userName,
    password: pass,
  });
  res.send(result);
});

export default router;
