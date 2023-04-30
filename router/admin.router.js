import express from "express";
import {
  getManager,
  getManagerId,
  createManager,
  editManagerById,
  deleteManagerById,
  getSeniorEmp,
  getSeniorEmpById,
  createSeniorEmp,
  editSeniorEmpById,
  deleteSeniorEmpById,
  getJuniorEmp,
  getJuniorEmpById,
  createJuniorEmp,
  editJuniorEmpById,
  deleteJuniorEmpById,
} from "../service/admin.service.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();
import { getUserByName, signUp } from "../service/admin.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Admin
router.get("/", function (req, res) {
  res.send("Hello all welcome to the administrator page");
});
// ----------------------------------------------------------------------------------
// Manager
router.get("/manager", auth, async function (req, res) {
  const result = await getManager();
  res.send(result);
});

router.get("/manager/:id", auth, async function (req, res) {
  const { id } = req.params;
  const result = await getManagerId(id);
  res.send(result);
});

router.post("/create/manager", auth, async function (req, res) {
  const data = req.body;
  const result = await createManager(data);
  res.send(result);
});

router.put("/edit/manager/:id", auth, async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await editManagerById(id, data);
  res.send(result);
});

router.delete("/delete/manager/:id", auth, async function (req, res) {
  const { id } = req.params;
  const result = await deleteManagerById(id);
  res.send(result);
});
// ----------------------------------------------------------------------------------
// Senior Employees
router.get("/seniorEmp", async function (req, res) {
  const result = await getSeniorEmp();
  res.send(result);
});

router.get("/seniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await getSeniorEmpById(id);
  res.send(result);
});

router.post("/create/seniorEmp", async function (req, res) {
  const data = req.body;
  const result = await createSeniorEmp(data);
  res.send(result);
});

router.put("/edit/seniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await editSeniorEmpById(id, data);
  res.send(result);
});

router.delete("/delete/seniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await deleteSeniorEmpById(id);
  res.send(result);
});
// -------------------------------------------------------------------------------
// Junior Employees
router.get("/juniorEmp", async function (req, res) {
  const result = await getJuniorEmp();
  res.send(result);
});

router.get("/juniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await getJuniorEmpById(id);
  res.send(result);
});

router.post("/create/juniorEmp", async function (req, res) {
  const data = req.body;
  const result = await createJuniorEmp(data);
  res.send(result);
});

router.put("/edit/juniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await editJuniorEmpById(id, data);
  res.send(result);
});

router.delete("/delete/juniorEmp/:id", async function (req, res) {
  const { id } = req.params;
  const result = await deleteJuniorEmpById(id);
  res.send(result);
});
// -------------------------------------------------------------------------
// Generate Hashed Password
const generateHashedPassword = async (password) => {
  const noOfRounds = 10;
  const salt = await bcrypt.genSalt(noOfRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
// ---------------------------------------------------------------------------
// Signup
router.post("/signUp", async function (req, res) {
  const { userName, password } = req.body;
  const userFromDb = await getUserByName(userName);
  if (userFromDb) {
    res.status(400).send({ message: "User name already exist" });
  } else if (password.length < 8) {
    res.status(400).send({ message: "Password must be atleast 8 characters" });
  } else {
    const pass = await generateHashedPassword(password);
    const result = await signUp({
      userName: userName,
      password: pass,
    });
    res.send(result);
  }
});
// ------------------------------------------------------------------------------
// Login
router.post("/login", async function (req, res) {
  const { userName, password } = req.body;
  const userFromDb = await getUserByName(userName);
  if (!userFromDb) {
    res.status(400).send({ message: "Invalid Credentials" });
  } else {
    const storedDbPassword = userFromDb.password;
    const isPasswordCheck = await bcrypt.compare(password, storedDbPassword);
    if (isPasswordCheck) {
      const token = jwt.sign({ id: userFromDb._id }, process.env.SECRET_KEY);
      res.send({ message: "Successful login", token: token });
    } else {
      res.status(400).send({ message: "Invalid Credentials" });
    }
  }
});

export default router;
