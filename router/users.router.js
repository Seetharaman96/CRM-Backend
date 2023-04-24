// import express from "express";
// const router = express.Router();
// import { getUserByName, signUp } from "../service/users.service.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// const generateHashedPassword = async (password) => {
//   const noOfRounds = 10;
//   const salt = await bcrypt.genSalt(noOfRounds);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   return hashedPassword;
// };
// // ---------------------------------------------------------------------------
// // Signup
// router.post("/signUp", async function (req, res) {
//   const { userName, password } = req.body;
//   const userFromDb = await getUserByName(userName);
//   if (userFromDb) {
//     res.status(400).send({ message: "User name already exist" });
//   } else if (password.length < 8) {
//     res.status(400).send({ message: "Password must be atleast 8 characters" });
//   } else {
//     const pass = await generateHashedPassword(password);
//     const result = await signUp({
//       userName: userName,
//       password: pass,
//     });
//     res.send(result);
//   }
// });
// // ------------------------------------------------------------------------------
// // Login
// router.post("/login", async function (req, res) {
//   const { userName, password } = req.body;
//   const userFromDb = await getUserByName(userName);
//   if (!userFromDb) {
//     res.status(400).send({ message: "Invalid Credentials" });
//   } else {
//     const storedDbPassword = userFromDb.password;
//     const isPasswordCheck = await bcrypt.compare(password, storedDbPassword);
//     if (isPasswordCheck) {
//       const token = jwt.sign({ id: userFromDb._id }, process.env.SECRET_KEY);
//       res.send({ message: "Successful login", token: token });
//     } else {
//       res.status(400).send({ message: "Invalid Credentials" });
//     }
//   }
// });

// export default router;
