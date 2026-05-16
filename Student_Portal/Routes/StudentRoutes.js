import express from "express";
import * as StudentController from "../controller/studentController.js";

const router = express.Router();

// no login, no middleware
router.get("/profile/:id", StudentController.getStudentProfile);

export default router;