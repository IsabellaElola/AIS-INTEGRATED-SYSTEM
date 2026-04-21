import * as authController from '../controller/authController.js';
import express from 'express';
const authRoutes = express.Router();

authRoutes.get("/test", (req, res) => {
    res.json({message: "Auth routes are working!"});
});

authRoutes.post("/register", authController.register);

export default authRoutes;
