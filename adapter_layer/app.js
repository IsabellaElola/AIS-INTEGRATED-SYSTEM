<<<<<<< HEAD
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// logger (should be early)
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/user', authRoutes);

// start server
app.listen(process.env.PORT || 9000, () => {
  console.log(`listening to port ${process.env.PORT || 9000}...`);
=======
import authRoutes from './routers/authRoutes.js';   
import express from "express";
import 'dotenv/config.js';
const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

app.use("/user", authRoutes);

app.use((req, res) =>{
    res.status(404).json
    ({success: false, message: "Route not found",
    });
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`Listening on port ${process.env.PORT || 4000}`);
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f
});