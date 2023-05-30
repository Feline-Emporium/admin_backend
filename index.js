import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as dotenv from 'dotenv'
dotenv.config()

import login from "./src/routes/login.js";
import getAllUsers from "./src/routes/getAllUsers.js";
import deleteUser from "./src/routes/deleteUser.js";

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/", login);
app.use("/users", getAllUsers);
app.use("/users", deleteUser);

app.get("/", (req, res) => {
  res.send("working fine");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});