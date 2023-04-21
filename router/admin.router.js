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
const router = express.Router();

// Admin
router.get("/", function (req, res) {
  res.send("Hello all welcome to the administrator page");
});
// ----------------------------------------------------------------------------------
// Manager
router.get("/manager", async function (req, res) {
  const result = await getManager();
  res.send(result);
});

router.get("/manager/:id", async function (req, res) {
  const { id } = req.params;
  const result = await getManagerId(id);
  res.send(result);
});

router.post("/create/manager", async function (req, res) {
  const data = req.body;
  const result = await createManager(data);
  res.send(result);
});

router.put("/edit/manager/:id", async function (req, res) {
  const { id } = req.params;
  const data = req.body;
  const result = await editManagerById(id, data);
  res.send(result);
});

router.delete("/delete/manager/:id", async function (req, res) {
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

export default router;
