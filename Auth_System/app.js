<<<<<<< HEAD
import express from 'express';
import 'dotenv/config';
import cors from "cors";
import userRoutes from './routes/UserRoutes.js';

//initialize express app
const app = express();

//Enable CORS to frontend
let corsOptions = {
  origin: process.env.ORIGIN

}

//middleware
app.use(express.json());
app.use(cors(corsOptions));

try
{
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to port ${process.env.PORT || 3000}...`);
});
}catch(e){
    console.error('Error starting the server:', e);
}

 
app.use  ('/user',userRoutes)

//req cons
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
=======
import express from "express";
import 'dotenv/config.js';

import userRouters from "./routes/UserRoutes.js";
import cors from "cors";

const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/user', userRouters);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.listen(process.env.PORT || 3002, () => {
    console.log(`Listening port ${process.env.PORT || 3002}`);
>>>>>>> 2164a97ce9d0689cf788be7f63fdb2d6fd54ff7f
});