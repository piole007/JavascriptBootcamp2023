import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from "../controllers/studentController.js";

//  to create routes and to have access to all the router methods (router.get, router.post etc)
const router = express.Router();

router.post("/create", createStudent);

router.get("/get-all", getAllStudents);

router.get("/get/:name", getStudent);

router.delete("/delete/:name", deleteStudent);

router.put("/update/:name", updateStudent);

export default router;
