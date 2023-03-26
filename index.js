import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv'
dotenv.config()

import getAllUsers from "./src/routes/getAllUsers.js";

const PORT = 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/users", getAllUsers);

app.get("/", (req, res) => {
  res.send("working fine");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});