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
});