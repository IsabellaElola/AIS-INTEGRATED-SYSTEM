<<<<<<< HEAD
import * as UserController from "../controller/UserController.js";
import express from 'express';


const userRoutes = express.Router();

userRoutes.post('/new', UserController.register)
userRoutes.post('/login', UserController.login)

export default userRoutes;
=======
import * as UserController from "../controllers/UserController.js";
import express from "express";

const userRoutes = express.Router();

userRoutes.post('/register', UserController.register);
userRoutes.post('/login', UserController.login);

export default userRoutes;
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f
